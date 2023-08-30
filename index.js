/**
 * Основной модуль приложения - точка входа. 
 */

const express = require("express");
const api = require("./api");
const logger = require("./logger");
const config = require("./config");
const utils = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

api.getAccessToken().then(async () => {

	app.get("/ping", (req, res) => res.send("pong " + Date.now()));

	app.post("/add-contact", async (req, res) => {
		const CURENT_DATE = new Date();
		const CONTACT_DATE_FIELD_ID = 1272367;
		const CONTACT_AGE_FIELD_ID = 1265371;
		const CONTACT_ID = req.body.contacts.add[0].id;
		const CONTACT = req.body.contacts.add[0];
		const CUSTOM_FIELDS = CONTACT.custom_fields;
		const [date, month, year] = utils.getFieldValue(CUSTOM_FIELDS, CONTACT_DATE_FIELD_ID).value.split(".");
		const MONTH = (CURENT_DATE.getMonth() + 1) - (Number(month) + 1);
		const AGE = (CURENT_DATE.getFullYear() - Number(year) - ((MONTH < 0 || ( MONTH === 0 && CURENT_DATE.getDate() < Number(date))) ? 1 : 0));
		
        const NEW_CONTACT = {
			id: Number(CONTACT_ID),
			custom_fields_values: [utils.makeField(CONTACT_AGE_FIELD_ID, AGE)]
		};

		await api.updateContacts(NEW_CONTACT);
		res.send("OK");
	});

	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
