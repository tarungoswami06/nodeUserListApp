const mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String }

}, { timestamps: true });


let User = module.exports = mongoose.model('User', UserSchema);
