"use strict"

const chalk = require('chalk');
const mongoose = require('mongoose');
var MONGODB_URI = 'mongodb://localhost:27017/testAppDb';
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).catch((err) => {
    console.log(chalk.red("Mongo Db Connection Error"), err)
});

let db = mongoose.connection;

db.once('open', () => {
    console.log(chalk.blue('Mongo Db Connected'));
});

db.on('error', (error) => {
    console.log("error", error);
});

module.exports = db;