import mongoose from 'mongoose';

const StatusSchema = new mongoose.Schema({
    arduinoId: String,
    time: Date,
    lightStatus: Number,
    gasStatus: Number
});

export default mongoose.model('Status', StatusSchema);