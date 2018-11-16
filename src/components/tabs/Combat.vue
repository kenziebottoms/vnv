<template>
  <section id="combat" class="tab">
    {{hp}}
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
export default {
  components: {
    AbilityScores,
  },
  computed: {
    hp() {
      console.log(this.char.level)
      console.log(this.char.class.hitDice)
      return getHitPoints(
        this.char.level,
        this.char.class.hitDice,
        Math.floor((totalAbilityScores(this.char).CON - 10) / 2)
      )
    },
  },
  props: {
    char: Object,
  },
}
</script>