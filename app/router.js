/* eslint-disable no-invalid-this */
import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function () {
	this.route("login");
	this.route("component-show");
});

export default Router;
