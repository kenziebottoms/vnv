<template>
  <section id="combat" class="tab">
    <stat-tile
      :value="hp"
      :label="'Current HP'"
      :adjustable="true"
    >
    </stat-tile>
    <stat-tile
      :value="hp"
      :label="'Max Hit Points'"
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
let { getHitPoints, totalAbilityScores } = stats

import AbilityScores from './../AbilityScores.vue'
import StatTile from './../elements/StatTile.vue'
export default {
  components: {
    AbilityScores,
    StatTile
  },
  computed: {
    hp() {
      return getHitPoints(
        this.char.level,
        this.char.class.hitDice,
        totalAbilityScores(this.char).CON
      )
    },
  },
  props: {
    char: Object,
  },
}
</script>