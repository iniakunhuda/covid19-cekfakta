var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyiBvXqBMcs7Lf9F'}).base('appANn2hOJzq7WWua');

export class AirtableAPI {
    
    constructor() {   
    }

    getTable(basename) {
        var data = new Object();

        if(basename == 'Artikel') {
            data = base(basename).select({
                sort: [{field: "Updated At", direction: "desc"}]
            }).all();            
        } else {
            data = base(basename).select({}).all();
        }

        return data;
    }
}