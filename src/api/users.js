import axios from 'axios'

export default {
  getUser(id) {
    console.log('getting user')
    return axios.get(`http://localhost:3000/users/${id}`).then(response => {
      return response.data
    })
  },
}
