<template>
  <section v-if="char" id="combat" class="tab">
    <hp-tile
      :value="currentHp"
      :max="hp"
      :adjustable="true"
      @increment="$emit('setDamage', char.damage-1)"
      @decrement="$emit('setDamage', char.damage+1)"
    ></hp-tile>
    <stat-tile
      v-if="char.equipped.armor"
      :label="'Armor Class'"
      :value="char.equipped.armor.AC + getModifier(totalAbilityScores.DEX)"
    >
    </stat-tile>
    <ability-scores
      :char="char"
      :show-roll-buttons="true"
    ></ability-scores>
  </section>
</template>
<script>
import stats from '../../utils/stats'
let { getHitPoints, totalAbilityScores, getModifier } = stats

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
  },
  props: {
    char: Object,
  },
  methods: {
    getModifier,
  },
}
</script>