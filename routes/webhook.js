const config = require('../config/config');
const configSharing = require('../config/sharing');
const responseToMessenger = require('./response/ai-request');
const responseSchema = require('./response/response-schemas');
const postbackBehaviour = require('./postback-behaviour/postback-handling');
const webhookDispatcher = require('./webhook-dispatcher');
const validateUser = require('./validations/validate-user');
const express = require('express');
const conversationWT = require('watson-developer-cloud/conversation/v1');
const router = express.Router();


/* For Facebook Validation */
router.get('/', function (req, res) {
  if (req.query['hub.mode'] && req.query['hub.verify_token'] === process.env.MESSENGER_VERIFY_TOKEN) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.status(403).end();
  }
});

/* Handling all messenges */
router.post('/', function (req, res) {
  if (req.body.object === 'page') {
    req.body.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        //console.log(event)
        if (event.postback && event.postback.payload) {
          sendMessagePostback(event)
        } else if (event.message && event.message.text) {
          sendMessage(event);
        }
      });
    });
    res.status(200).end();
  }
});


/* Handling all messenges */
/* GET query from watson */

function sendMessage(event) {
  var sender = event.sender.id;
  var text = event.message.text;
  watsonResponse(text, sender);
  validateUser.validateMessengerUser(sender, (response) => {
  });
}

function sendMessagePostback(event) {
  var sender = event.sender.id;
  var text = postbackBehaviour.postbackHandling(event.postback.payload);
  watsonResponse(text, sender);
}

function watsonResponse(text, sender) {
  let conversation = new conversationWT({
    username: process.env.USERNAME_LUCY,
    password: process.env.PASSWORD,
    version_date: conversationWT.VERSION_DATE_2017_05_26
  });

  conversation.message({
    input: {
      text: text
    },
    workspace_id: process.env.WORKSPACE_ID
  }, function (err, response) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
      var intent = response.intents[0].intent;
      webhookDispatcher.actionDispatcher(intent, (intentRes) => {
        if (intentRes) {
          try {
            responseToMessenger.watsonResponse(sender, JSON.parse(intentRes.speech));
          } catch (e) {
            responseToMessenger.watsonResponse(sender, { text: intentRes.speech });
          }
        } else {
          responseToMessenger.watsonResponse(sender, { text: response.output.text[0] });
        }
        sendMenu(sender);
      });
    }
  });
}

function sendMenu(sender) {
  setTimeout(() => {
    // Ayways show a memu of actions after a response
    responseToMessenger.watsonResponse(sender, responseSchema.responseQuickReply('¿Qué deseas hacer?', configSharing.menu));
  }, 1000);
}

/* Handling intents */
function responseAction() {
  webhookDispatcher.actionDispatcher(req, (response) => {
    return response
  });
}

module.exports = router;