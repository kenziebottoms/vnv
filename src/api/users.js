import axios from 'axios'

const path = 'http://localhost:3000'

export default {
  getUser(id) {
    console.log('getting user')
    return axios.get(`${path}/users/${id}`).then(response => {
      return response.data
    })
  },
  createUser(user) {
    return axios.post(`${path}/users`, user).then(response => {
      return response.data.id
    })
  },
}
