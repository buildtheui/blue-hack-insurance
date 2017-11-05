const config = require("../config/config");
const mongoose = require('mongoose');
var exports = module.exports = {};

mongoose.connect(config.mongoUrl + '/' + config.dbName);
var messengerUsersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  profilePhoto: String,
  profileLocale: String,
  timezone: Number,
  profileGende: String,
  messengerId: {
    type: Number,
    required: true
  },
  userDocument: Number
}, { collection: 'messengerUsers' });
// MongoDB model for messenger users on db (pre register a user)
exports.messengerUsersModel = mongoose.model('messengerUsers', messengerUsersSchema);

