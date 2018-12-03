import Character from '../../src/classes/Character'
import AbilityScores from '../../src/classes/AbilityScores'
import { assert } from 'chai'

let validAbilityScores = { STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1 }

let validCharParams = ['name', 1, 2, 3, 4, validAbilityScores, 8]

describe('Character class', () => {
  describe('Valid constructor', () => {
    it('should create an instance of Character', () => {
      assert.instanceOf(new Character(...validCharParams), Character)
    })
    it('should persist the data in the params (name, race, etc.)', () => {
      let char = new Character(...validCharParams)
      assert.equal(char.abilityScores.base.STR, validAbilityScores.STR)
      assert.equal(char.name, validCharParams[0])
      assert.equal(char.owner, validCharParams[1])
      assert.equal(char.race, validCharParams[2])
      assert.equal(char.subrace, validCharParams[3])
    })
    it('should fill in the blanks (level, damage, etc.)', () => {
      let char = new Character(...validCharParams)
      assert.equal(char.level, 1)
      assert.equal(char.damage, 0)
      assert.isEmpty(char.proficiencies.skills.classBonus)
    })
    it('should populate a valid creation date', () => {
      let date = Date.now()
      let char = new Character(...validCharParams)
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
      let char = new Character(...validCharParams)
      let abilityScores = char.totalAbilityScores()
      assert.equal(abilityScores.STR, validAbilityScores.STR)
      assert.equal(abilityScores.DEX, validAbilityScores.DEX)
      assert.equal(abilityScores.CON, validAbilityScores.CON)
      assert.equal(abilityScores.INT, validAbilityScores.INT)
      assert.equal(abilityScores.WIS, validAbilityScores.WIS)
      assert.equal(abilityScores.CHA, validAbilityScores.CHA)
    })
    it('should reflect improvements', () => {
      let char = new Character(...validCharParams)
      char.improve(4, { CHA: 1 })
      let abilityScores = char.totalAbilityScores()
      assert.equal(abilityScores.STR, validAbilityScores.STR)
      assert.equal(abilityScores.DEX, validAbilityScores.DEX)
      assert.equal(abilityScores.CON, validAbilityScores.CON)
      assert.equal(abilityScores.INT, validAbilityScores.INT)
      assert.equal(abilityScores.WIS, validAbilityScores.WIS)
      assert.equal(abilityScores.CHA, validAbilityScores.CHA + 1)
    })
  })
})
