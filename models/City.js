const mongoose = require('mongoose')

const City = new mongoose.Schema({
    name: {type: String, default: ''},
    Country: {type: String, default: ''},
    population: {type: Number, default: 0}
})

module.exports = mongoose.model('City', City)