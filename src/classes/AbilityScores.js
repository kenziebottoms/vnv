import _ from 'lodash'

export default class AbilityScores {
  constructor({ STR, DEX, CON, INT, WIS, CHA }) {
    this.base = { STR, DEX, CON, INT, WIS, CHA }
    this.improvements = []
  }
  total() {
    let totals = _.clone(this.base)
    for (let stat in this.base) {
      totals[stat] += _.sumBy(_.flattenDeep(this.improvements), stat) || 0
    }
    return totals
  }
  improve(level, { STR = 0, DEX = 0, CON = 0, INT = 0, WIS = 0, CHA = 0 }) {
    if (this.improvements.find(i => i.level == level)) {
      throw new DuplicateAbilityScoreImprovementError()
    }
    this.improvements.push({ level, STR, DEX, CON, INT, WIS, CHA })
  }
}
