import express from 'express';
import User from "../models/user";
import Status from "../models/status";
const router = express.Router();

router.route('/')
    .get((req, res) => {
        User.find({}, (err, users) => {
            if(err)
                res.send(err)
            res.json(users);
        });
    });


router.route('/status')
    .post((req, res) => {
        let newStatus = new Status({arduinoId: '44444444', time: Date.now(), lightStatus: 1, gasStatus: 0});
        newStatus.save()
            .then(status => {
            res.send("status saved to database");
        })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    });

export default router;