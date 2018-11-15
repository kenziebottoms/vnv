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

export default {
  totalAbilityScores,
  calculateImprovementTotals(improvements, level) {
    return totalAbilityScores(improvements.filter(i => i.level >= level))
  },
}
