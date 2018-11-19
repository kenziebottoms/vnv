<template>
  <section id="combat" class="tab">
    <hp-tile
      :value="currentHp"
      :max="hp"
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
        this.char.hitPoints.hitDice,
        totalAbilityScores(this.char).CON
      )
    },
    currentHp() {
      return this.hp - this.char.hitPoints.damage
    },
  },
  props: {
    char: Object,
  },
}
</script>