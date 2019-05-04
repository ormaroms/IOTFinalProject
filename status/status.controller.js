const express = require('express');
const router = express.Router();
const statusService = require('./status.service');

router.get('/', getAll);
router.get('/getArduinoHistory/:id', getArduinoHistory);
router.get('/:id', getById);
router.put('/:id', update);
router.post('/:id', create);
router.delete('/:id', _delete);

function getAll(req, res, next) {
    statusService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getArduinoHistory(req, res, next) {
    statusService.getArduinoHistory(req.params.id)
        .then(statuses => res.json(statuses))
        .catch(err => next(err));
}

function getById(req, res, next) {
    statusService.getByUserId(req.params.id)
        .then(status => status ? res.json(status) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    statusService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function create(req, res, next) {
    statusService.create(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    statusService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

module.exports = router;