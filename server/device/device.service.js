const db = require('_helpers/db');
const Device = db.Devices;

async function getById(id) {
    return await Device.find({ userId: id });
}

async function create(deviceParam) {
    if (await Device.findOne({ userId: deviceParam.userId })) {
        throw 'user with the Id "' + deviceParam.userId + '" is already taken';
    }

    const device = new Device(deviceParam);

    await device.save();

    return device.devices;
}

async function update(id, deviceParam) {
    const device = await Device.find({userId: id});

    if (!device) throw 'Device not found';

    Object.assign(device, deviceParam);

    await device.save();

    return device.devices;
}

async function _delete(id) {
    await Device.findByIdAndRemove(id);
}

module.exports = {
    getById,
    create,
    update,
    delete: _delete
};