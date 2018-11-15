import axios from 'axios'

const path = 'http://localhost:3000'

export default {
  getClass(id) {
    return axios.get(`${path}/classes/${id}`).then(response => {
      return response.data[0]
    })
  },
}
