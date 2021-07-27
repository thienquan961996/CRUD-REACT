const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Persons = new Schema({
    name: {
        type: String
    },
    adress: {
        type: String
    },
    age: {
        type: Number
    },
    sex: {
        type: String
    },
    date: {
        type: Number
    }
}, {
    collection: 'persons'
});

module.exports = mongoose.model('Persons', Persons);