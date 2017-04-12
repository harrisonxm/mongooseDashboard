var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 5},
 age: {type: Number, required: true},
 weapon: {type: Number, default:0}
 }, {timestamps: true});

 var Ninja = mongoose.model('Ninja', UserSchema)
