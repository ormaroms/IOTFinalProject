const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            { url: /^\/status\/.*/, methods: ['GET', 'PUT', 'POST', 'DELETE'] },
            { url: /^\/static\/.*/, methods: ['GET'] },
            { url: '/', methods: ['GET'] },
            { url: /^\/device_status\/.*/, methods: ['GET'] },
            { url: '/register', methods: ['GET'] },
            { url: '/device_list', methods: ['GET'] },
            { url: '/status_history', methods: ['GET'] },

            '/users/authenticate',
            '/users/register',
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};