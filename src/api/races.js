import axios from 'axios'

const path = 'http://localhost:3000'

export default {
  getRaceBySlug(slug) {
    return axios.get(`${path}/races?name`)
  },
}
