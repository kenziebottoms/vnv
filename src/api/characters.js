import axios from 'axios'

const path = 'http://localhost:3000'

export default {
  getCharacter(id) {
    return axios.get(`${path}/characters/${id}`).then(response => {
      return response.data
    })
  },
  getCharacterWithRace(id) {},
  createCharacter(char) {
    return axios.post(`${path}/characters`, char).then(response => {
      return response.data
    })
  },
  getCharactersByUser(userId) {
    return axios.get(`${path}/characters?owner=${userId}`).then(response => {
      return response.data
    })
  },
}
