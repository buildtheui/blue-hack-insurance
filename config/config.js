var MONGODB_URL = process.env.MONGODB_URL || null;
var PRODUCTION = process.env.PRODUCTION || null;

module.exports = {
  mongoUrl: (PRODUCTION) ? "mongodb://" + MONGODB_URL + ":27017" : "mongodb://localhost:27017",
  dbName: "insurance",
  facebookPostUrl: "https://graph.facebook.com/v2.6/me/messages",
  easycardEmailSoporte: "info@insurance.com"
}
