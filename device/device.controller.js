const express = require('express');
const router = express.Router();
const deviceService = require('./device.service');

router.get('/:id', getById);
router.put('/:id', update);
router.post('/:id', create);
router.delete('/:id', _delete);

function getById(req, res, next) {
    deviceService.getById(req.params.id)
        .then(device => device ? res.json(device) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    deviceService.update(req.params.id, req.body)
        .then((devices) => res.json({devices}))
        .catch(err => next(err));
}

function create(req, res, next) {
    deviceService.create(req.params.id, req.body)
        .then((devices) => res.json({devices}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    deviceService.delete(req.params.id, req.body)
        .then((devices) => res.json({devices}))
        .catch(err => next(err));
}

module.exports = router;