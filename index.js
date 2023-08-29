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
        const CONTACT_FIELD_ID = 1265371
        const CONTACT_ID = req.body.contacts.add[0].id
        const CONTACT = req.body.contacts.add[0]

		const custom_fields = CONTACT.custom_fields;
        let birthday = null;
		custom_fields.map(item => {
			if(String(item.name) === "Дата рождения") {
                birthday = item.values[0];
			}
		});
		const AGE = Math.floor((Date.now() / 31536000000) - (birthday / 31536000));

        const NEW_CONTACT = {
            id: Number(CONTACT_ID),
            custom_fields_values: [utils.makeField(CONTACT_FIELD_ID, AGE)]
        }
        await api.updateContacts(NEW_CONTACT)
		res.send("OK");
	});


	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
