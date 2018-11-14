<template>
  <section>
    <section v-if="char.stats">
      <h2>Stats</h2>
      <section v-if="char.stats.hitPoints">
        <h3>Hit Points</h3>
        Base: {{char.stats.hitPoints.base}}
      </section>
      <section v-if="char.stats.abilityScores">
        <h3>Ability Scores</h3>
        <ability-scores
          :level="char.level"
          :abilityScores="char.stats.abilityScores"
        ></ability-scores>
      </section>
    </section>
  </section>
</template>
<script>
import AbilityScores from './AbilityScores.vue'
export default {
  components: {
    AbilityScores,
  },
  props: {
    char: Object,
  },
}
</script>