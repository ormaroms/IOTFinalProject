const db = require('_helpers/db');
const devices = require('../device/device.service');
const Status = db.Status;

async function getAll() {
    return await Status.find({},{ __v: 0});
}

async function getArduinoStatusById(device) {
    return await Status.find({arduinoId: device.id});
}


async function getById(id) {
    let userDevices = await devices.getById(id);
    let jsonArray = [];

    for (let device of userDevices.devices) {
        let arduinoStatus = await getArduinoStatusById(device);

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
}

async function update(id, statusParam) {
    if (await Status.findOne({ arduinoId: id })) {
        await Status.remove({ arduinoId: id});

    }

    this.create(id, statusParam);
}

async function create(id, statusParam) {
    console.log("New status received, id: " +id )

    if (await Status.findOne({ arduinoId: id })) {
        await Status.remove({ arduinoId: id});

    }

    let isLightOn = false;
    let isGasOn = false;

    if(statusParam.gasStatus === 0) {
        isGasOn = true;
    }

    if(statusParam.lightStatus === 0) {
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
    getById,
    create,
    update,
    delete: _delete
};