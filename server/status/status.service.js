const db = require('_helpers/db');
const Status = db.Status;

async function getAll() {
    return await Status.find();
}

async function getById(id) {
    return await Status.find({arduinoId: id});
}

async function update(id, statusParam) {
    const status = await Status.find({arduinoId: id});

    if (!status) throw 'Status not found';

    if(statusParam.gasStatus === 0) {
        status.gasStatus = true;
    }

    if(statusParam.lightStatus === 0) {
        status.lightStatus = true;
    }

    status.time = Date.now();

    await status.save();
}

async function create(id, statusParam) {
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