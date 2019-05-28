require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const favicon = require('express-favicon');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(jwt());

app.use(favicon(__dirname + '/client_build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client_build')));
app.get('/monitor', function (req, res) {
    res.sendFile(path.join(__dirname, 'client_build', 'index.html'));
});

app.use('/users', require('./users/users.controller'));
app.use('/status', require('./status/status.controller'));
app.use('/devices', require('./device/device.controller'));

app.use(errorHandler);

const port = process.env.PORT || 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
