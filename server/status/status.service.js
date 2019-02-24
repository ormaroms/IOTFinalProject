const db = require('_helpers/db');
const devices = require('../device/device.service');
const Status = db.Status;

async function getAll() {
    return await Status.find({},{ __v: 0});
}

async function getById(id) {
    let jsonArray = [];
    return devices.getById(id).then(usersDevices => {
        console.log(usersDevices.devices);
        console.log("SDFSDFSDSASDFSDFSDFSDFSDFSDF");
        usersDevices.devices.forEach((device) => {
            console.log(device);
            console.log("Second LOGS");
            Status.find({arduinoId: device.id}).then((statusOfArdunio) => {
                if(statusOfArdunio[0]) {
                console.log(statusOfArdunio[0]);
                console.log("333333333333333 LOGS !");

                    let tempJSON = {
                        "id": device.id,
                        "name": device.name,
                        "gasStatus": statusOfArdunio[0].gasStatus,
                        "lightStatus": statusOfArdunio[0].lightStatus
                    };
                    console.log(tempJSON);
                    jsonArray = [...jsonArray, tempJSON];
                }
            })
        });
        return {"devices": jsonArray};
    });
    console.log("FINISH");
    console.log(jsonArray);
    //return await {"devices": jsonArray};
}

async function update(id, statusParam) {
    if (await Status.findOne({ arduinoId: id })) {
        await Status.remove({ arduinoId: id});

    }

    this.create(id, statusParam);
}

async function create(id, statusParam) {
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