import DS from 'ember-data';

export default DS.Model.extend({
    token: DS.attr('string'),
    UserData: DS.belongsTo('UserData', { async: false })
});
