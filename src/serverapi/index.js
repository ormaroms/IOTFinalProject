import axios from 'axios'

const SERVER = 'http://192.168.43.204:4000'

export function getStatus(id) {
    return axios.get(SERVER + '/status/' + id, {params: {id: id}})
}