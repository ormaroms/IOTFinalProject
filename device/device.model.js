const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, unique: true, required: true },
    devices: [{id:{type: String, unique: true}, name:String}]
},  { autoIndexId: false });

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Device', schema);