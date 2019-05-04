const db = require('_helpers/db');
const devices = require('../device/device.service');
const Status = db.Status;
const Device = db.Device;

async function getAll() {
    return await Status.find({},{ __v: 0});
}

async function getLatestArduinoStatusById(deviceId) {
    return await Status.find({arduinoId: deviceId},{ __v: 0, _id: 0, id: 0}).sort({$natural: -1}).limit(1);
}

async function getArduinoHistory(deviceId) {
    return await Status.find({arduinoId: deviceId},{ __v: 0, id: 0, _id: 0});
}

async function getByUserId(UserId) {
    let userDevices = await Device.findOne({ userId: UserId});
    let jsonArray = [];

    if (userDevices) {
        for (let device of userDevices.devices) {
            let arduinoStatus = await getLatestArduinoStatusById(device.id);

            if(arduinoStatus[0]) {
                jsonArray.push({
                    "id": device.id,
                    "name": device.name,
                    "gasStatus": (arduinoStatus[0]).gasStatus,
                    "lightStatus": (arduinoStatus[0]).lightStatus
                });
            }
        }

        return await jsonArray;
    } else {
        throw new Error('User Id = ' + id + ' Doesnt have arduinos!');
    }
}

async function update(id, statusParam) {
    if (Object.keys(statusParam).length === 1)
        statusParam = (JSON.parse(Object.keys(statusParam)[0]));

    if (await Status.findOne({ arduinoId: id })) {
        await Status.remove({ arduinoId: id});

    }

    this.create(id, statusParam);
}

async function create(id, statusParam) {
    let isLightOn = false;
    let isGasOn = false;

    if(statusParam.gasStatus.toString() === "0") {
        isGasOn = true;
    }

    if(statusParam.lightStatus.toString() === "0") {
        isLightOn = true;
    }

    let statusJson = {
        arduinoId: id,
        time: Date.now(),
        lightStatus: isLightOn,
        gasStatus: isGasOn
    };

    let newStatus = new Status(statusJson);

    await newStatus.save();
}

async function _delete(id) {
    let statusToDelete = await Status.find({arduinoId: id});
    await statusToDelete.remove();
}

module.exports = {
    getAll,
    getByUserId,
    getArduinoHistory,
    create,
    update,
    delete: _delete
};