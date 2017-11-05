const request = require('request');
const config = require("../../config/config");
const messengerUsers = require("../../schemas/messenger-users");
const responseSchema = require('../response/response-schemas');
const aiResponse = require('../response/ai-request');
const configSharing = require('../../config/sharing');
const responseToMessenger = require('../response/ai-request');
const express = require('express');
var exports = module.exports = {};

const feedbackResponses = [
  'Comunicate con los comercios aquí 💬',
  'Perfecto, comunicate con los comercios aquí 💬'
]

const responseListBusinesses = [
  'Estos comercios estan con EasyCard 👇',
  'Aqui puedes ver los comercios 👇'
]

exports.sendFeedbackLink = function (senderId, cb) {
  var textMessage = feedbackResponses[Math.floor(Math.random() * feedbackResponses.length)];
  var buttons = [{
    "type": "web_url",
    "url": configSharing.sendMessage + '/' + senderId,
    "title": "Enviar mje a comercio",
    "messenger_extensions": true,
    "fallback_url": configSharing.sendMessage + '/' + senderId

  }]
  var response = responseSchema.responseTempleteButton(textMessage, buttons);
  cb(response);
}

exports.listBusinesses = function (senderId, cb) {
  var textMessage = responseListBusinesses[Math.floor(Math.random() * responseListBusinesses.length)];
  var buttons = [{
    "type": "web_url",
    "url": configSharing.viewBusinesses,
    "title": "Ver comercios",
    "messenger_extensions": true,
    "fallback_url": configSharing.viewBusinesses

  }]
  var response = responseSchema.responseTempleteButton(textMessage, buttons);
  cb(response);
}

exports.showBrochure = function (senderId, cb) {
  var response = responseSchema.fileResponse(configSharing.brochure);
  cb(response);
}

exports.showBrochureText = function (senderId) {
  responseToMessenger.watsonResponse(senderId, 
    responseSchema.textResponse('Con mucho gusto te compartimos nuestro brochure 👇'));
}

