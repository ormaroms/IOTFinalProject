const db = require('_helpers/db');
const Device = db.Device;

async function getById(id) {
    return await Device.findOne({ userId: id }, {_id: 0}).then(result => {return {"devices": result.devices}});
}

async function create(id ,deviceParam) {
    // if (await Device.findOne({ userId: id })) {
    //     await Device.remove({ userId: id});
    //
    // }
    //     const device = new Device(deviceParam);
    //
    //     await device.save();
    //
    // return await Device.find({userId: id}, {_id: 0}).then(result => {return {"devices": result.devices}});

    if (!await Device.findOne({ userId: id })) {
        const device = new Device(deviceParam);
        await device.save();
    } else {
        let userDevices = await Device.findOne({ userId: id});
        console.log(userDevices);
        let device = userDevices.devices.filter(device => device.id === deviceParam.devices[0].id);

        if(device.length != 0){
            throw new Error('Device Id = ' + device[0].id + ' Already exists!');
        } else {
            await userDevices.devices.push(deviceParam.devices[0]);
        }

        await userDevices.devices.push(deviceParam.devices[0]);
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

async function _delete(id) {
    await Device.findByIdAndRemove(id);
}

module.exports = {
    getById,
    create,
    update,
    delete: _delete
};