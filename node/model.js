const mongoose = require("mongoose");

const signup = new mongoose.Schema({
    name: {type: String, requiured: true},
    email: {type: String, requiured: true},
    password: {type: String, requiured: true},
    date: {type: Date, default: new Date()},
    time: {type: String, default: new Date().getTime()}
})

const model = mongoose.model("signupModel", signup);

module.exports = model;