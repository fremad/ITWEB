var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});


const iteration = 10000;
const hashsize = 128;

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(24).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, iteration, hashsize).toString('hex');
};
 
userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, iteration, hashsize).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 1);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, 'thisIsSomeSecret'); // DO NOT KEEP YOUR SECRET IN THE CODE! :)
};


mongoose.model('User', userSchema);