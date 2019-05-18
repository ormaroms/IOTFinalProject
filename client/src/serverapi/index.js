import axios from 'axios'

const SERVER = 'https://iot-gas-monitor.herokuapp.com'

export function getStatus(token, id) {
    return axios.get(SERVER + '/status/' + id)//, {params: {token, id}})
}

export function getUserDevices(token, id) { // The id need to be here
    return axios.get(SERVER + '/devices/' + '5caba627e4b63200044dc316', {
        headers: {
            'authorization' : 'Bearer '+token,
            'Content-Type' : 'application/json'
        }
    })
}

export function addNewDevice(token, newDeviceId, newDeviceName) { // TODO: insert token
    debugger;
    return axios.post(SERVER + '/devices/' + '5caba627e4b63200044dc316', {
        "id": newDeviceId,
        "name": newDeviceName
    }, {
        headers: {
            'authorization' : 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}

export function deleteDevice(token, deviceToDelete) { // TODO: insert token
    return axios.delete(SERVER + '/devices/' + '5caba627e4b63200044dc316',  {
        headers: {
            'authorization' : 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        data: {
            'arduinoId': deviceToDelete
        }
    })
}

export function updateDevice(token, deviceToUpdateId, deviceNewName) { // TODO: insert token
    return axios.put(SERVER + '/devices/' + '5caba627e4b63200044dc316', {
        "id": deviceToUpdateId,
        "name": deviceNewName
    }, {
        headers: {
            'authorization' : 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}

export function login(userName, password)
{
    return axios.post(SERVER + '/users/authenticate', {
        "username": userName,
        "password": password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

 export function register(userName, password)
 {
     debugger;
     return axios.post(SERVER + '/users/register', {
         "username": userName,
         "password": password
     }, {
     headers: {
         'Content-Type': 'application/json'
     }
 })
 }
