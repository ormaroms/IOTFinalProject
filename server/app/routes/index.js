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
        let isLightOn = false;
        let isGasOn = false;
        console.log(req.body);
        if(req.body.gasStatus === 0) {
            isGasOn = true;
        }

        if(req.body.lightStatus === 0) {
            isLightOn = true;
        }

        let statusJson = {
            arduinoId: req.body.arduinoId,
            time: Date.now(),
            lightStatus: isLightOn,
            gasStatus: isGasOn
        };
        let newStatus = new Status(statusJson);
        newStatus.save()
            .then(status => {
            res.send("status saved to database");
        })
            .catch(err => {
                res.status(400).send("unable to save to database");
            });
    });

export default router;