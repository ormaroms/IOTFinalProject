import mongoose from 'mongoose';

const StatusSchema = new mongoose.Schema({
    arduinoId: String,
    time: Date,
    lightStatus: Boolean,
    gasStatus: Boolean
});

export default mongoose.model('Status', StatusSchema);