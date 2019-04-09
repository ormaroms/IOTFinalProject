import axios from 'axios'

const SERVER = 'https://iot-gas-monitor.herokuapp.com'

export function getStatus(id) {
    return axios.get(SERVER + '/status/' + id, {params: {id: id}})
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
