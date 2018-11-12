import Route from "@ember/routing/route";
import LoginLogic from "./login-logic";

export default Route.extend(LoginLogic, {
	init() {
		this._super(...arguments);
		this.get("pmController").get("BusinessLogic").funcInjection(this.loginBack);
	},
	setupController(controller, /*model*/) {
		this._super(...arguments);
		controller.set("user_id", "");
		controller.set("user_pwd", "");
	},
	model() {

	},
	actions: {
		send() {
			let PublicKey = null,
				RSA = null,
				req = null,
				eqValues = null,
				conditions = null,
				encryptString = null;

			PublicKey = `MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAK9L5z4lVKzUdffDqndr78I+ovAZ9W/AOTf9AYqOWgw1ZzJuHSHZL8iCtkfSR9KMsLC/wxsNHigUFyKsaTWFIi8CAwEAAQ==`;
			// let PrivateKey = `MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAr0vnPiVUrNR198Oqd2vvwj6i8Bn1b8A5N/0Bio5aDDVnMm4dIdkvyIK2R9JH0oywsL/DGw0eKBQXIqxpNYUiLwIDAQABAkAex1ID3GQgsHFCHo3ox//h+EN9quEoTPT++qJxpIr1B4T6DAUOzuI68/eZy5MGpUvi4vhtmYn9mrbVeqZnrcDBAiEA2hUHPCoDjSibsp1o5IMhgIXlnKsz7+9UgC+FW6vDgOECIQDNxnWaq53Q27LmFP6mM/sHDN2uMx0nvphKhqQ9vaI1DwIhANIHgIFMAUGYg2LhQJ0bQU+zJLDfHVUNzPbrTWc9JDthAiAHlSuaQn6zRpVGEzn7B+lVLi0xESMe5tAX1vRQbh9/EwIgf2TdQUtdoCDGHQA6NrEZ8jqMX4opbwa8WqqNewuBXPw=`;

			RSA = this.get("pmController").get("RSA");

			RSA.setPublicKey(PublicKey);

			req = this.get("pmController").get("Store").createModel("request", { id: "1", res: "auth" });

			eqValues = [
				{ id: 1, type: "eqcond", key: "user_id", val: this.controllerFor("login").get("user_id") },
				{ id: 2, type: "eqcond", key: "user_pwd", val: this.controllerFor("login").get("user_id") }
			];

			eqValues.forEach((elem) => {
				req.get(elem.type).pushObject(this.get("pmController").get("Store").createModel(elem.type, {
					id: elem.id,
					key: elem.key,
					val: elem.val
				}));
			});

			conditions = this.get("pmController").get("Store").object2JsonApi(req);

			this.get("logger").log(conditions);

			encryptString = RSA.encryptLong(JSON.stringify(conditions));

			this.get("logger").log(encryptString);

			this.get("pmController").get("Store").queryObject("/api/v1/login/0", "auth", conditions).then(data => {
				this.get("pmController").get("BusinessLogic").getFuncInstance("loginBack", data);
				this.transitionTo("component-show");
			});
		}
	}
});
