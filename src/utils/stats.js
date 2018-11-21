import _ from 'lodash'

let addAbilityScores = scores => {
  let totals = {
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  }
  for (let stat in totals) {
    totals[stat] += _.sumBy(_.flattenDeep(scores), stat) || 0
  }
  return totals
}

let calculateRaceBonuses = (race, subrace) => {
  let subraceBonuses
  if (subrace) {
    subraceBonuses = _.cloneDeep(subrace.abilityScores)
  }
  let raceBonuses = _.cloneDeep(race.abilityScores)
  return addAbilityScores([raceBonuses, subraceBonuses])
}

let totalAbilityScores = char => {
  return addAbilityScores([
    calculateRaceBonuses(
      char.race,
      char.race.subraces.find(sr => sr.id == char.subrace)
    ),
    ...char.abilityScores.improvements.filter(i => i.level <= char.level),
    char.abilityScores.base,
  ])
}

let getModifier = stat => {
  return Math.floor((stat - 10) / 2)
}

export default {
  totalAbilityScores,
  calculateRaceBonuses,
  totalAbilityScores,
  getModifier,
  getHitPoints(level, hitDice, con) {
    let avgHitDiceRoll = Math.floor(hitDice / 2) + 1
    return hitDice + (level - 1) * (avgHitDiceRoll + getModifier(con))
  },
  printModifier(mod) {
    return (mod >= 0 ? '+' : '') + mod
  },
}
