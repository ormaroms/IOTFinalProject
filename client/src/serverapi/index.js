import axios from 'axios'

const SERVER = 'http://localhost:4000'

export function getStatus(id) {
    return axios.get(SERVER + '/status/' + id)
}