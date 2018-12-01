import AbilityScores from '../../src/classes/AbilityScores'
import { assert } from 'chai'

let validAbilityScores = { STR: 1, DEX: 2, CON: 3, INT: 4, WIS: 5, CHA: 6 }

describe('AbilityScores class', () => {
  describe('Valid object without improvements', () => {
    it('should persist the supplied base values', () => {
      let ab = new AbilityScores(validAbilityScores)
      assert.equal(ab.base.STR, validAbilityScores.STR)
      assert.equal(ab.base.DEX, validAbilityScores.DEX)
      assert.equal(ab.base.CON, validAbilityScores.CON)
      assert.equal(ab.base.INT, validAbilityScores.INT)
      assert.equal(ab.base.WIS, validAbilityScores.WIS)
      assert.equal(ab.base.CHA, validAbilityScores.CHA)
    })
    it('should total up correctly', () => {
      let ab = new AbilityScores(validAbilityScores)
      assert.equal(ab.total().STR, validAbilityScores.STR)
    })
  })
  describe('Valid object with improvements', () => {
    it('should persist the supplied base values', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.improve(4, { STR: 1, CON: 1 })
      assert.equal(ab.base.STR, validAbilityScores.STR)
      assert.equal(ab.base.DEX, validAbilityScores.DEX)
      assert.equal(ab.base.CON, validAbilityScores.CON)
    })
    it('should total up correctly', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.improve(4, { STR: 1, CON: 1 })
      assert.equal(ab.total().STR, validAbilityScores.STR + 1)
      assert.equal(ab.total().DEX, validAbilityScores.DEX)
      assert.equal(ab.total().CON, validAbilityScores.CON + 1)
    })
    it('should treat duplicate level improvements as replacements', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.improve(4, { STR: 1, CON: 1 })
      ab.improve(4, { STR: 2, CON: 2 })
      assert.equal(ab.total().STR, validAbilityScores.STR + 2)
      assert.equal(ab.total().DEX, validAbilityScores.DEX)
      assert.equal(ab.total().CON, validAbilityScores.CON + 2)
    })
  })
  describe('Valid object with race/subrace bonuses', () => {
    it('should persist the correct bonuses', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.setRaceSubrace(1, 1)
      assert.equal(ab.bonuses.race.DEX, 2)
      assert.equal(ab.bonuses.subrace.WIS, 1)
    })
    it('should total up correctly', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.setRaceSubrace(1, 1)
      assert.equal(ab.total().DEX, validAbilityScores.DEX + 2)
      assert.equal(ab.total().WIS, validAbilityScores.WIS + 1)
    })
    it('should stack with improvements', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.improve(4, { DEX: 2 })
      ab.setRaceSubrace(1, 1)
      assert.equal(ab.total().WIS, validAbilityScores.WIS + 1)
      assert.equal(ab.total().DEX, validAbilityScores.DEX + 4)
    })
  })
  describe('Valid object with other bonuses', () => {
    it('should persist the correct bonuses', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.addBonus({ STR: 1 })
      assert.equal(ab.bonuses.other.STR, 1)
    })
    it('should total up correctly', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.addBonus({ STR: 1 })
      assert.equal(ab.total().STR, validAbilityScores.STR + 1)
    })
    it('should replace other other bonuses', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.addBonus({ STR: 1 })
      ab.addBonus({ STR: 2 })
      assert.equal(ab.bonuses.other.STR, 2)
    })
    it('should stack with race/subrace bonuses', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.setRaceSubrace(1, 1)
      ab.addBonus({ STR: 1 })
      assert.equal(ab.total().STR, validAbilityScores.STR + 1)
      assert.equal(ab.total().DEX, validAbilityScores.DEX + 2)
      assert.equal(ab.total().WIS, validAbilityScores.WIS + 1)
    })
    it('should stack with improvements', () => {
      let ab = new AbilityScores(validAbilityScores)
      ab.improve(4, { STR: 2 })
      ab.addBonus({ STR: 1 })
      assert.equal(ab.total().STR, validAbilityScores.STR + 3)
    })
  })
})
