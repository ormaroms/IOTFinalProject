const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, unique: true, required: true },
    devices: [{id:String, name:String}]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Device', schema);