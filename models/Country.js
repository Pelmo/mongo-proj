const mongoose = require('mongoose')

const Country = new mongoose.Schema({
    name: {type: String, default: ''},
    continent: {type: String, default: ''},
    population: {type: Number, defalu: 0}
})

module.exports = mongoose.model('Country', Country)