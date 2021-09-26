
var admin = require("firebase-admin");

var serviceAccount = require("../congfig/fbSercviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
