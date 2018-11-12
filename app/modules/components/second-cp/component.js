import Component from "@ember/component";

export default Component.extend({
	actions: {
		childClick() {
			this.get("logger").log("childClick");
			this.get("eventHandle").upAction(this, "show2", "我是second组件数据");
		}
	}
});
