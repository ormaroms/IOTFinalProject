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

export function login(userName, password)
{
    debugger;
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
