<template>
  <section>
    <section v-if="char.stats">
      <h2>Stats</h2>
      <stat-tile v-if="char.stats.hitPoints"
        :label="'Base Hit Points'"
        :value="char.stats.hitPoints.base.toString()"
      ></stat-tile>
      <stat-tile v-if="char.stats.hitPoints"
        :label="'Hit Points'"
        :value="char.stats.hitPoints.base.toString()"
      ></stat-tile>
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
import AbilityScores from './../AbilityScores.vue'
import StatTile from './../StatTile.vue'
export default {
  components: {
    AbilityScores,
    StatTile,
  },
  props: {
    char: Object,
  },
}
</script>