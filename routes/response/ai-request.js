/* 
* requests to send a response to messenger facebook  
*/
const request = require('request');
const config = require('../../config/config');
var exports = module.exports = {};

exports.watsonResponse = function (senderId, message) {
  request({
    url: config.facebookPostUrl,
    qs: { access_token: process.env.MESSENGER_PAGE_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: senderId },
      message: message
    }
  }, (error, response) => {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}

exports.watsonResponseWithCallBack = function (senderId, message, cb) {
  request({
    url: config.facebookPostUrl,
    qs: { access_token: process.env.MESSENGER_PAGE_TOKEN },
    method: 'POST',
    json: {
      recipient: { id: senderId },
      message: message
    }
  }, (error, response) => {
    if (error) {
      console.log('Error sending message: ', error);
      cb(false);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
      cb(false);
    } else { 
      cb(true);
    }
  });
}



