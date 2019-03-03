const db = require('_helpers/db');
const devices = require('../device/device.service');
const Status = db.Status;

async function getAll() {
    return await Status.find({},{ __v: 0});
}

async function getArduinoStatusById(device) {
    return await Status.find({arduinoId: device});
}

// Dumbed down for the POC
async function getById(id) {
    let arduinoStatus = await getArduinoStatusById(id);

    if(arduinoStatus[0]) {
        return await {
            "arduinoID": id,
            "gasStatus": (arduinoStatus[0]).gasStatus,
            "lightStatus": (arduinoStatus[0]).lightStatus
        }
    }
}


/*async function getById(id) {
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
}*/

async function update(id, statusParam) {
    // If it is a request from the arduino
    if (Object.keys(statusParam).length == 1)
        statusParam = (JSON.parse(Object.keys(statusParam)[0]))

    if (await Status.findOne({ arduinoId: id })) {
        await Status.remove({ arduinoId: id});

    }

    this.create(id, statusParam);
}

async function create(id, statusParam) {
    console.log("New status received, id: " +id );

    if (await Status.findOne({ arduinoId: id })) {
        await Status.remove({ arduinoId: id});

    }

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

    try{
        let a = await newStatus.save();
        console.log(a)
    } catch (e) {
        console.log(e);
    }

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