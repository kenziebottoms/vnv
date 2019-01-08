import AbilityScores from './AbilityScores'
import { getRaceById } from '../api/races'

export default class Character {
  constructor(jsonObj) {
    this.name = jsonObj.name
    this.fullName = jsonObj.name
    this.owner = jsonObj.owner
    if (!jsonObj.hasOwnProperty('race')) throw new Error('Specify a race')
    this.race = jsonObj.race
    if (!jsonObj.hasOwnProperty('subrace')) throw new Error('Specify a subrace')
    this.subrace = jsonObj.subrace
    this.class = jsonObj.class
    this.abilityScores = new AbilityScores(jsonObj.abilityScores)
    if (!this.abilityScores.bonuses.race)
      this.abilityScores.setRaceSubrace(this.race, this.subrace)
    this.level = jsonObj.level || 1
    this.created = jsonObj.created || Date.now()
    this.proficiencies = jsonObj.proficiencies
    this.alignment = jsonObj.alignment || null
    this.armor = jsonObj.armor
    this.weapons = jsonObj.weapons
    this.damage = jsonObj.damage
  }
  improve(level, abilityScores) {
    this.abilityScores.improve(level, abilityScores)
  }
  totalAbilityScores() {
    return this.abilityScores.total()
  }

  stringify() {
    return JSON.stringify(this)
  }
}
