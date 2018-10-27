import Component from '@ember/component';

export default Component.extend({
    actions: {
        childClick() {
            this.get('logger').log('childClick');
            this.get('eventHandle').upAction(this, 'show3', '我是third组件数据')
        }
    }
});
