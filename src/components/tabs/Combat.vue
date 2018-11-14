<template>
  <section id="combat" class="tab">
    <ability-scores
      :level="char.level"
      :abilityScores="char.stats.abilityScores"
    ></ability-scores>
  </section>
</template>
<script>
import AbilityScores from './../AbilityScores.vue'
export default {
  components: {
    AbilityScores,
  },
  props: {
    char: Object,
  },
}
</script>