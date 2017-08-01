var mongoose = require('mongoose');

var loginSchema =  new mongoose.Schema({

    id: {type:[Number]},
    username: {type:String, default:''},
    password: {type:String, default:''},
    created: {type:Date, default:Date.now},
    email: {type:String, default:''}

});

module.exports = mongoose.model('loginSchema', loginSchema);