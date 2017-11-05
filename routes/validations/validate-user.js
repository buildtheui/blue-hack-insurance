/**** 
* this modules are used to validate if a user has been registered before 
* in the insurance db
*/
const request = require('request');
const config = require("../../config/config");
const messengerUsers = require("../../schemas/messenger-users");
const express = require('express');
var exports = module.exports = {};


exports.validateMessengerUser = function (messengerId, cb) {
  messengerUsers.messengerUsersModel.findOne({
    messengerId: parseInt(messengerId)
  }, (err, messengerUser) => {
    if (err) {
      cb({ register: false });
      return;
    }
    if (messengerUser) {
      messengerUser.register = true;
      cb(messengerUser);
    } else {
      request
        .get({
          url: 'https://graph.facebook.com/v2.6/' + messengerId + '?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=' + process.env.MESSENGER_PAGE_TOKEN
        }, (err, facebookInfo) => {
          if (err) {
            cb({
              register: false
            });
            return;
          }
          facebookInfo = JSON.parse(facebookInfo.body);
          var userProfile = {
            firstName: facebookInfo.first_name,
            lastName: facebookInfo.last_name,
            profilePhoto: facebookInfo.profile_pic,
            profileLocale: facebookInfo.locate,
            timezone: facebookInfo.timezone,
            profileGende: facebookInfo.gender,
            messengerId: parseInt(messengerId)
          }
          var newMessangerUser = new messengerUsers.messengerUsersModel(userProfile);
          newMessangerUser.save((err, user) => {
            if (err) {
              cb({
                register: false
              });
              return;
            }
            user.register = true;
            cb(user);
          });          
        });
    }
  })
};