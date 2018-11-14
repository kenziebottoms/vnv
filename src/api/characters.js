import axios from 'axios'

const path = 'http://localhost:3000'

import races from './races'
let { getRaceById } = races

export default {
  getCharacter(id) {
    return axios.get(`${path}/characters/${id}`).then(response => {
      return response.data
    })
  },
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
