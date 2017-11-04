const dotenv = require('dotenv');
dotenv.config()

const conversationWT = require('watson-developer-cloud/conversation/v1');

const conversation = new conversationWT({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  version_date: conversationWT.VERSION_DATE_2017_04_11
});

conversation.message({
  input: {
    text: ''
  },
  workspace_id: process.env.WORKSPACE_ID
}, function (err, response) {
  if (err) {
    console.error(err);
  }  else {
    console.log(JSON.stringify(response, null, 2));
  }
})