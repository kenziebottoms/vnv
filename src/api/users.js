import axios from 'axios'

const path = 'http://localhost:3000'

export default {
  getUser(id) {
    return axios.get(`${path}/users/${id}`).then(response => {
      return response.data
    })
  },
  createUser(user) {
    return axios.post(`${path}/users`, user).then(response => {
      return response.data
    })
  },
  getAllUsers() {
    return axios.get(`${path}/users`).then(response => {
      return response.data
    })
  },
}
