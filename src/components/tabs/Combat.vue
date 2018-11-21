<template>
  <section v-if="char" id="combat" class="tab">
    <section>
      <hp-tile
        :value="currentHp"
        :max="hp"
        :adjustable="true"
        @increment="$emit('setDamage', char.damage-1)"
        @decrement="$emit('setDamage', char.damage+1)"
      ></hp-tile>
      <stat-tile
        :label="'Armor Class'"
        :value="armor.AC + getModifier(totalAbilityScores.DEX)"
      >
      </stat-tile>
    </section>
    <hr/>
    <section>
      <ability-scores
        :char="char"
        :show-roll-buttons="true"
      ></ability-scores>
    </section>
  </section>
</template>
<script>
import stats from '../../utils/stats'
let { getHitPoints, totalAbilityScores, getModifier } = stats

import _ from 'lodash'

import AbilityScores from './../AbilityScores.vue'
import HpTile from './../elements/HpTile.vue'
import StatTile from './../elements/StatTile.vue'
export default {
  components: {
    AbilityScores,
    HpTile,
    StatTile,
  },
  computed: {
    hp() {
      return getHitPoints(
        this.char.level,
        this.char.hitDice,
        this.totalAbilityScores.CON
      )
    },
    totalAbilityScores() {
      return totalAbilityScores(this.char)
    },
    currentHp() {
      return this.hp - this.char.damage
    },
    armor() {
      let noArmor = { name: 'None', AC: 10 }
      if (!this.char.armor) return noArmor
      if (Array.isArray(this.char.armor)) {
        if (this.char.armor.length == 0) return noArmor
        if (this.char.armor.length == 1) return this.char.armor[0]
        return _.find(this.char.armor, 'equipped')
      }
    },
  },
  props: {
    char: Object,
  },
  methods: {
    getModifier,
  },
}
</script>