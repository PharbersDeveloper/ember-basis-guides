import Component from "@ember/component";

export default Component.extend({
	actions: {
		topClick() {
			this.get("logger").log("topClick");
			this.get("eventHandle").upAction(this, "show1", "我是顶层组件数据");
		}
	}
});
