import axios from 'axios'

const SERVER = 'https://iot-gas-monitor.herokuapp.com'

export function getStatus(token, id) {
    return axios.get(SERVER + '/status/' + id)//, {params: {token, id}})
}

export function getUserDevices(token, id) { // The id need to be here
    return axios.get(SERVER + '/devices/' + id, {
        headers: {
            'authorization' : 'Bearer '+token,
            'Content-Type' : 'application/json'
        }
    })
}
export function getStatusHistory(token, id) {
    debugger// The id need to be here
    return axios.get(SERVER + '/status/getArduinoHistory/' + id, {
        headers: {
            'authorization' : 'Bearer '+token,
            'Content-Type' : 'application/json'
        }
    })
}


export function addNewDevice(token, id, newDeviceId, newDeviceName) { // TODO: insert token
    return axios.post(SERVER + '/devices/' + id, {
        "id": newDeviceId,
        "name": newDeviceName
    }, {
        headers: {
            'authorization' : 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    })
}

export function deleteDevice(token, id, deviceToDelete) { // TODO: insert token
    return axios.delete(SERVER + '/devices/' + id,  {
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

 export function register(userName, password, name, email)
 {
     return axios.post(SERVER + '/users/register', {
         "username": userName,
         "password": password,
         "name": name,
         "email": email
     }, {
     headers: {
         'Content-Type': 'application/json'
     }
 })
 }
