const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    arduinoId: { type: String, unique: false, required: true },
    gasStatus: { type: Boolean, required: true },
    lightStatus: { type: Boolean},
    time: { type: Date, default: Date.now }
}, { versionKey: false });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Status', schema);