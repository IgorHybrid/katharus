var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Collection schema.
 */
var fields = {
  _username: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description:{
    type: String,
    required: true
  },
  country:{
    type: String,
    required: true
  },
  created: {
      type: Date,
      default: Date.now
  },
  price: {
    type: String,
    required: true
  }
};

var TripSchema = new Schema(fields);


/**
 * Select item by id.
 *
 * Uses findOne() method.
 *
 * @static
 * @param {String} id
 * @param {Function} cb
 */
TripSchema.statics.findOneById = function (id, cb) {
    this.findOne({_id: id}).exec(cb);
};

// Duplicate the ID field.
TripSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TripSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Trip', TripSchema);
