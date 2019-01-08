import Character from '../../src/classes/Character'
import AbilityScores from '../../src/classes/AbilityScores'
import { assert } from 'chai'

let validAbilityScores = {
  base: { STR: 1, DEX: 2, CON: 3, INT: 4, WIS: 5, CHA: 6 },
}

let validCharParams = {
  id: 1,
  owner: 1,
  level: 1,
  name: 'name',
  fullName: 'full name',
  classes: [{ id: 1, level: 5 }],
  race: 1,
  subrace: 1,
  created: 0,
  background: 1,
  abilityScores: {
    base: {
      STR: 10,
      DEX: 10,
      CON: 10,
      INT: 10,
      WIS: 10,
      CHA: 10,
    },
  },
  proficiencies: {
    skills: {},
  },
  alignment: null,
  armor: [],
  weapons: [],
}

describe('Character class', () => {
  describe('Valid constructor', () => {
    it('should create an instance of Character', () => {
      assert.instanceOf(new Character(validCharParams), Character)
    })
    it('should persist the data in the params (name, race, etc.)', () => {
      let char = new Character(validCharParams)
      assert.equal(char.abilityScores.base.STR, validAbilityScores.base.STR)
      assert.equal(char.name, validCharParams.name)
      assert.equal(char.owner, validCharParams.owner)
      assert.equal(char.race, validCharParams.race)
      assert.equal(char.subrace, validCharParams.subrace)
    })
    it('should fill in the blanks (level, damage, etc.)', () => {
      let char = new Character(validCharParams)
      assert.equal(char.level, 1)
      assert.equal(char.damage, 0)
      assert.isEmpty(char.proficiencies.skills.classBonus)
    })
    it('should populate a valid creation date', () => {
      let date = Date.now()
      let char = new Character(validCharParams)
      assert.isAtLeast(char.created, date)
    })
  })
  describe('Empty constructor', () => {
    it('should throw a TypeError', () => {
      assert.throws(() => new Character(), TypeError)
    })
  })
  describe('get abilityScores', () => {
    it('should return abilityScore total', () => {
      let char = new Character(validCharParams)
      let abilityScores = char.totalAbilityScores()
      assert.equal(abilityScores.STR, validAbilityScores.base.STR)
      assert.equal(abilityScores.DEX, validAbilityScores.base.DEX)
      assert.equal(abilityScores.CON, validAbilityScores.base.CON)
      assert.equal(abilityScores.INT, validAbilityScores.base.INT)
      assert.equal(abilityScores.WIS, validAbilityScores.base.WIS)
      assert.equal(abilityScores.CHA, validAbilityScores.base.CHA)
    })
    it('should reflect improvements', () => {
      let char = new Character(validCharParams)
      char.improve(1, { CHA: 1 })
      let abilityScores = char.totalAbilityScores()
      assert.equal(abilityScores.STR, validAbilityScores.base.STR)
      assert.equal(abilityScores.DEX, validAbilityScores.base.DEX)
      assert.equal(abilityScores.CON, validAbilityScores.base.CON)
      assert.equal(abilityScores.INT, validAbilityScores.base.INT)
      assert.equal(abilityScores.WIS, validAbilityScores.base.WIS)
      assert.equal(abilityScores.CHA, validAbilityScores.base.CHA + 1)
    })
  })
})
