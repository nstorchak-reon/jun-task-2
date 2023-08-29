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

api.getAccessToken().then(() => {
	app.get("/ping", (req, res) => res.send("pong " + Date.now()));

	app.post("/add-contact", (req, res) => {
		const custom_fields = req.body.contacts.add[0].custom_fields;
		let field_id = null;
		custom_fields.map(item => {
			if(String(item.name) === "Дата рождения") {
				field_id = item.id;
			}
		});
		const birthday = utils.getFieldValue(custom_fields, field_id);
		const age = Math.floor((Date.now() / 31536000000) - (birthday / 31536000));
		utils.makeField("999", "Возраст", age);
		console.log(utils.makeField("999", age));
		res.send("OK");
	});

	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
