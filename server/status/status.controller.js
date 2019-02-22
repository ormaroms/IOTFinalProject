const express = require('express');
const router = express.Router();
const statusService = require('./status.service');

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.post('/:id', create);
router.delete('/:id', _delete);

function getAll(req, res, next) {
    statusService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    statusService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
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