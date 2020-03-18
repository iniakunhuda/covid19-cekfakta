// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyiBvXqBMcs7Lf9F'}).base('appANn2hOJzq7WWua');

import axios from 'axios';
const URL = "https://api.airtable.com/v0/";
const BASE = "appANn2hOJzq7WWua";
const TOKEN = "keyiBvXqBMcs7Lf9F";

export class AirtableAPI2 {
    
    constructor() {   
    }

    getAll(basename) {
        axios({
            url: URL + BASE + "/" + basename,
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            },
            params: {
            }
        }).then((res) => {
            console.log(res.data.records);
            return res.data.records;
        });
    }
}