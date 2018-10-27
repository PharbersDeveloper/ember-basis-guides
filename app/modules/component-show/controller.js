import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        show1(data) {
            this.get('logger').log(data)
        },
        show2(data) {
            this.get('logger').log(data)
        },
        show3(data) {
            this.get('logger').log(data)
        }
    }
});
