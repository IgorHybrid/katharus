
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

/**
 * Collection schema.
 */
var fields = {
  username: {
      type: String,
      unique: true,
      required: true
  },
  hashedPassword: {
      type: String,
      required: true
  },
  salt: {
      type: String,
      required: true
  },
  created: {
      type: Date,
      default: Date.now
  }
  email: {
    type: String,
    unique: true,
    required: true
  }
};

var UserSchema = new Schema(fields);


/**
 * Select item by id.
 *
 * Uses findOne() method.
 *
 * @static
 * @param {String} id
 * @param {Function} cb
 */
UserSchema.statics.findOneById = function (id, cb) {
    this.findOne({_id: id}).exec(cb);
};

/**
 * Encrypt password.
 *
 * @param {String} password
 * @returns {String}
 */
UserSchema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  //more secure – return crypto.pbkdf2Sync(password, this.salt, 10000, 512);
};

UserSchema.virtual('password')
.set(function(password) {
  this._plainPassword = password;
  this.salt = crypto.randomBytes(128).toString('hex');
  this.hashedPassword = this.encryptPassword(password);
})
.get(function() {
  return this._plainPassword;
});

UserSchema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

// Duplicate the ID field.
UserSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('User', UserSchema);
