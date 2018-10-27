import Mixin from '@ember/object/mixin';

export default Mixin.create({
    loginBack(data) {
        let jsonstr = JSON.stringify(data.serialize());
        this.get('cookie').write('token', jsonstr, { path: '/', maxAge: 1600000 })
        // this.get('cookie').write('a', 'a')
        // this.get('cookie').write('b', 'b')
        // this.get('cookie').write('c', 'c')
        // this.get('logger').log(this.get('cookie').read('token'));
        // this.get('cookie').clean('token', 'a', 'b')
    }
})