const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
  __id: {type: String, required: true, unique: true},
  user_id: { type: String, required: true },
  createdAt: { type: Date, expires: 30, default: Date.now },
  message: {type: String, required: true},
});

module.exports = mongoose.model('Message', msgSchema);
