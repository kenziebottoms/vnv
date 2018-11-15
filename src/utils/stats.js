export default {
  calculateAbilityScores(baseStats, improvements) {
    let totals = Object.assign({}, baseStats)
    for (let key in baseStats) {
      for (let imp in improvements) {
        if (imp[key]) totals[key] += imp[key]
      }
    }
    return totals
  },
}
