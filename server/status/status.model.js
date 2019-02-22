const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    arduinoId: { type: String, unique: true, required: true },
    gasStatus: { type: Boolean, required: true },
    lightStatus: { type: Boolean, default: Date.now },
    time: { type: Date, default: Date.now }
},{ _id : false });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Status', schema);