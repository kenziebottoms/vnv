import _ from 'lodash'

let totalAbilityScores = scores => {
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
  return totalAbilityScores([raceBonuses, subraceBonuses])
}

export default {
  totalAbilityScores,
  calculateRaceBonuses,
  totalAbilityScores(char) {
    return totalAbilityScores([
      calculateRaceBonuses(
        char.race,
        char.race.subraces.find(sr => sr.id == char.subrace)
      ),
      ...char.abilityScores.improvements.filter(i => i.level <= char.level),
      char.abilityScores.base,
    ])
  },
}
