<template>
  <section>
    <h2>Stats</h2>
    <stat-tile
      v-if="char.stats.hitPoints"
      :label="'Base Hit Points'"
      :value="char.stats.hitPoints.base.toString()"
    ></stat-tile>
    <stat-tile
      v-if="char.stats.hitPoints.calculated"
      :label="'Hit Points'"
      :value="char.stats.hitPoints.base.toString()"
    ></stat-tile>
    <stat-tile
      v-if="speed"
      :label="'Walking Speed'"
      :value="speed+'ft'"
    ></stat-tile>
    <ability-scores
      v-if="char.stats.abilityScores"
      :level="char.level"
      :abilityScores="char.stats.abilityScores"
    ></ability-scores>
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
  computed: {
    subrace() {
      if (this.char.subrace) {
        return this.char.race.subraces.find(s => s.id == this.char.subrace)
      }
    },
    speed() {
      return (
        (this.subrace ? this.subrace.traits.SPEED : null) ||
        this.race.traits.SPEED ||
        this.char.traits.SPEED
      )
    },
  },
  props: {
    char: Object,
  },
}
</script>