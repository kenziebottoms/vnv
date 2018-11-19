<template>
  <section v-if="char" id="combat" class="tab">
    <hp-tile
      :value="currentHp"
      :max="hp"
      :adjustable="true"
      @increment="$emit('setDamage', char.damage-1)"
      @decrement="$emit('setDamage', char.damage+1)"
    >
    </hp-tile>
    <ability-scores
      :char="char"
      :show-roll-buttons="true"
    ></ability-scores>
  </section>
</template>
<script>
import stats from '../../utils/stats'
let { getHitPoints, totalAbilityScores } = stats

import AbilityScores from './../AbilityScores.vue'
import HpTile from './../elements/HpTile.vue'
export default {
  components: {
    AbilityScores,
    HpTile,
  },
  computed: {
    hp() {
      return getHitPoints(
        this.char.level,
        this.char.hitDice,
        totalAbilityScores(this.char).CON
      )
    },
    currentHp() {
      return this.hp - this.char.damage
    },
  },
  props: {
    char: Object,
  },
}
</script>