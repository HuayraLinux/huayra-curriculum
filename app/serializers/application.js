import { LSSerializer } from 'ember-localstorage-adapter';

export default LSSerializer.extend({
    serialize({record}, options) {
        let json = this._super(...arguments);
        if(options.forExport) {
            record.eachAttribute(attribute =>
                json[`hay${attribute}`] = !!record.get(attribute));
            record.eachRelationship(relationship =>
                json[`hay${relationship}`] = record.get(`${relationship}.length`) > 0);
        }
        return json;
    }
});
