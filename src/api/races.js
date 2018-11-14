import axios from 'axios'

const path = 'http://localhost:3000'

export default {
  getRaceByName(name) {
    return axios.get(`${path}/races?name=${name}`).then(response => {
      return response.data
    })
  },
  getRaceById(id) {
    return axios.get(`${path}/races/${id}`).then(response => {
      return response.data[0]
    })
  },
}
