import AbilityScores from './AbilityScores'

class Character {
  constructor(
    name,
    owner,
    race,
    subrace,
    charClass,
    baseAbilityScores,
    hitDice
  ) {
    this.name = name
    this.fullName = name
    this.owner = owner
    this.race = race
    this.subrace = subrace
    this.class = charClass
    this.abilityScores = new AbilityScores(baseAbilityScores)
    this.hitDice = hitDice
    this.level = 1
    this.created = Date.now()
    this.proficiencies = {
      skills: {
        classBonus: [],
        raceBonus: [],
        subraceBonus: [],
      },
    }
    this.alignment = null
    this.armor = []
    this.weapons = []
    this.damage = 0
  }
}
