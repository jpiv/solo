var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/typeTest");

var userSchema = mongoose.Schema({
  username: String,
  Wpm: Number,
  'Words Typed': 0,
  'Correct Words': 0,
  'Failed Words': 0,

});

var User = mongoose.model('User', userSchema);

module.exports.handlePOST = function (req, res) {
  var user = new User(req.body);
  user.save();
  console.log("Database updated.");
  res.status(201).send();
};