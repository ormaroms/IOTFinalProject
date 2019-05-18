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
        const device = new Device({"userId": id, "devices":[]});
        device.devices.push(deviceParam);
        await device.save();
    } else {
        let userDevices = await Device.findOne({ userId: id});
        let device = userDevices.devices.filter(device => device.id === deviceParam.id);

        if (device.length !== 0) {
            throw new Error('Device Id = ' + device[0].id + ' Already exists');
        } else {
            await userDevices.devices.push(deviceParam);
        }

        await userDevices.save();
    }

    return await Device.findOne({userId: id}, {_id: 0}).then(result => {return result.devices});
}

async function update(id, deviceParam) {
    let userDevices = await Device.findOne({ userId: id});

    if (userDevices) {
        let device = userDevices.devices.filter(device => device.id === deviceParam.id);

        if (device.length === 0) {
            throw new Error('Device Id = ' + deviceParam.id + ' Doesnt exists');
        } else {
            let filtersDevices = userDevices.devices.filter(device => device.id !== deviceParam.id);
            filtersDevices.push(deviceParam);
            userDevices.devices = filtersDevices;

            await userDevices.save();
            return await Device.findOne({userId: id}, {_id: 0}).then(result => {return result.devices});
        }
    } else {
        throw new Error('User ' + id + " has no Devices");
    }
}

async function _delete(id, deviceContent) {
    let userDevices = await Device.findOne({ userId: id});
    if (userDevices) {
        let device = userDevices.devices.filter(device => device.id === deviceContent.arduinoId);

        if (device.length !== 0) {
            let userDevicesData = userDevices.devices.filter(device => device.id !== deviceContent.arduinoId);
            userDevices.devices = userDevicesData;
            await userDevices.save();

            return await Device.findOne({userId: id}, {_id: 0}).then(result => {return result.devices});
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