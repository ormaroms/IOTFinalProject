const db = require('_helpers/db');
const Device = db.Device;

async function getById(id) {
    return await Device.findOne({ userId: id }, {_id: 0}).then(
        result => {return {"devices": result.devices}}).catch(error => {
        throw new Error('userId ' + id + ' has no devices');
    });
}

async function create(id ,deviceParam) {
    if (!await Device.findOne({ userId: id })) {
        const device = new Device(deviceParam);
        await device.save();
    } else {
        let userDevices = await Device.findOne({ userId: id});
        let device = userDevices.devices.filter(device => device.id === deviceParam.devices[0].id);

        if (device.length != 0) {
            throw new Error('Device Id = ' + device[0].id + ' Already exists!');
        } else {
            await userDevices.devices.push(deviceParam.devices[0]);
        }

        await userDevices.save();
    }

    return await Device.find({userId: id}, {_id: 0}).then(result => {return {"devices": result.devices}});
}

async function update(id, deviceParam) {
    const device = await Device.find({userId: id});

    if (!device) throw 'Device not found';

    Object.assign(device, deviceParam);

    await device.save();
    return await Device.find({userId: id}).select('-_id');
}

async function _delete(id, deviceContent) {
    let userDevices = await Device.findOne({ userId: id});
    if (userDevices) {
        let device = userDevices.devices.filter(device => device.id === deviceContent.arduinoId);

        if (device.length != 0) {
            let userDevicesData = userDevices.devices.filter(device => device.id !== deviceContent.arduinoId);
            userDevices.devices = userDevicesData;
            await userDevices.save();
            console.log("worked");
        } else {
            throw new Error('userId ' + id + ' has no devices with an id ' + deviceContent.arduinoId);
        }
    } else {
        throw new Error('No such user id with the id ' + id);
    }
}

module.exports = {
    getById,
    create,
    update,
    delete: _delete
};