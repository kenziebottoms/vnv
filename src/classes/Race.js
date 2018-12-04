export default class Race {
  constructor(jsonObj) {
    this.id = jsonObj.id
    this.name = jsonObj.name
    this.abilityScores = jsonObj.abilityScores
    this.speed = jsonObj.speed
    this.proficiencies = jsonObj.proficiencies
    this.subraces = jsonObj.subraces
  }
  get abilityScoreBonuses() {
    return this.abilityScores
  }
}
