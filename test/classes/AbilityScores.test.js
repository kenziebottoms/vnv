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
  })
})
