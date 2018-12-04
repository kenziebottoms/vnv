import axios from 'axios'
import Race from '../classes/Race'

const path = 'http://localhost:3000'

export default {
  getRaceByName(name) {
    return axios.get(`${path}/races?name=${name}`).then(response => {
      return new Race(response.data)
    })
  },
  getRaceById(id) {
    return axios.get(`${path}/races/${id}`).then(response => {
      return new Race(response.data[0])
    })
  },
}
