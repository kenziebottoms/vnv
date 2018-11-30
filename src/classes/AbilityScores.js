export default class AbilityScores {
  constructor({ STR, DEX, CON, INT, WIS, CHA }) {
    this.base = { STR, DEX, CON, INT, WIS, CHA }
    this.improvements = []
  }
}
