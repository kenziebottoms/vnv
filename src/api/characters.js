import axios from 'axios'

const path = 'http://localhost:3000/characters'

import Character from '../classes/Character'

import races from './races'
import classes from './classes'

let { getRaceById } = races
let { getClass } = classes

let getCharacter = id => {
  return axios.get(`${path}/${id}`).then(response => {
    return new Character(response.data)
  })
}
let updateCharacter = char => {
  return axios.patch(`${path}/${char.id}`, char).then(response => {
    return new Character(response.data)
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
          if (!charData.race) return null
          return getRaceById(charData.race)
        })
        .then(data => {
          charData.race = data
          if (!charData.class) return null
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
    return axios.post(`${path}`, char).then(response => {
      return response.data
    })
  },
  getCharactersByUser(userId) {
    return axios.get(`${path}?owner=${userId}`).then(response => {
      return response.data
    })
  },
  updateCharacter,
  updateLevel(charId, newLevel) {
    return axios
      .patch(`${path}/${charId}`, { level: newLevel })
      .then(response => {
        return response.data
      })
  },
  updateDamage(charId, points) {
    if (points >= 0) {
      return axios
        .patch(`${path}/${charId}`, { damage: points })
        .then(response => {
          return response.data
        })
    }
  },
}
