import Route from '@ember/routing/route';
import LoginLogic from './login-logic';

export default Route.extend(LoginLogic, {
    init() {
        this._super(...arguments);
        this.get('pmController').get('BusinessLogic').funcInjection(this.loginBack)
    },
    setupController(controller, /*model*/) {
        this._super(...arguments);
        controller.set('user_id', '');
        controller.set('user_pwd', '');
    },
    model() {

    },
    actions: {
        send() {
            let req = this.get('pmController').get('Store').createModel('request', { id: '1', res: 'auth' });
            let eqValues = [
                { id: 1, type: 'eqcond', key: 'user_id', val: this.controllerFor('login').get('user_id') },
                { id: 2, type: 'eqcond', key: 'user_pwd', val: this.controllerFor('login').get('user_id') },
            ]
            eqValues.forEach((elem) => {
                req.get(elem.type).pushObject(this.get('pmController').get('Store').createModel(elem.type, {
                    id: elem.id,
                    key: elem.key,
                    val: elem.val,
                }))
            });
            let conditions = this.get('pmController').get('Store').object2JsonApi(req);
            this.get('logger').log(conditions)
            this.get('pmController').get('Store').queryObject('/api/v1/login/0', 'auth', conditions).then(data => {
                this.get('pmController').get('BusinessLogic').getFuncInstance('loginBack', data)
            });
        }
    }
});
