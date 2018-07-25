 //define what a pet is
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let petSchema = new Schema({
    name: {type: String, required: true, unique: true}, //defaults to false if u dont specify
    owner: {type: String, required: true}, 
    type: {type: String, required: true},
    age: {type: Number, required: true},
    breed: {type: String}
});

module.exports = mongoose.model('Pet', petSchema);