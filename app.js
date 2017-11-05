'use strict';
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const facebookConfigRoutes = require('./routes/webhook');
dotenv.config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origins
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* For Facebook validation and message handling*/
app.use('/', facebookConfigRoutes);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});



