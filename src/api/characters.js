import axios from 'axios'

const path = 'http://localhost:3000'

import races from './races'
import classes from './classes'

let { getRaceById } = races
let { getClass } = classes

let getCharacter = id => {
  return axios.get(`${path}/characters/${id}`).then(response => {
    return response.data
  })
}

export default {
  getCharacter,
  getCharacterWithClassAndRace(id) {
    return new Promise((resolve, reject) => {
      let charData
      getCharacter(id)
        .then(data => {
          charData = data
          return getRaceById(charData.race)
        })
        .then(data => {
          charData.race = data
          return getClass(charData.class)
        })
        .then(data => {
          charData.class = data
          resolve(charData)
        })
        .catch(err => reject(err))
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
