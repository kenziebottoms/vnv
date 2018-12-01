import _ from 'lodash'

import { races } from '../api/db/races.json'
import { classes } from '../api/db/classes.json'

export default class AbilityScores {
  constructor({ STR, DEX, CON, INT, WIS, CHA }) {
    this.base = { STR, DEX, CON, INT, WIS, CHA }
    this.improvements = []
    this.bonuses = {
      race: null,
      subrace: null,
      other: null,
    }
  }
  total() {
    let totals = _.clone(this.base)
    for (let stat in this.base) {
      totals[stat] += _.sumBy(_.flattenDeep(this.improvements), stat) || 0
      totals[stat] += _.sumBy(_.values(this.bonuses), stat) || 0
    }
    return totals
  }
  improve(level, { STR = 0, DEX = 0, CON = 0, INT = 0, WIS = 0, CHA = 0 }) {
    if (this.improvements.find(i => i.level == level)) {
      this.improvements = this.improvements.filter(i => i.level != level)
    }
    this.improvements.push({ level, STR, DEX, CON, INT, WIS, CHA })
  }
  setRaceSubrace(id, subId) {
    let race = races.find(r => r.id == id)
    this.bonuses.race = race.abilityScores
    if (!subId) throw new Error('You must supply a subrace.')
    let subrace = race.subraces.find(sr => sr.id == subId)
    if (!subrace)
      throw new Error(
        `The specified race does not have a subrace with ID ${subId}`
      )
    this.bonuses.subrace = subrace.abilityScores
  }
  setClass(id) {
    this.bonuses.class = classes.find(c => c.id == id).abilityScores
  }
  addBonus({ STR = 0, DEX = 0, CON = 0, INT = 0, WIS = 0, CHA = 0 }) {
    this.bonuses.other = { STR, DEX, CON, INT, WIS, CHA }
  }
}
