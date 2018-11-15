<template>
  <section v-if="char">
    <h2>Stats</h2>
    <stat-tile
      v-if="char.hitPoints && char.hitPoints.base"
      :label="'Base Hit Points'"
      :value="char.hitPoints.base.toString()"
    ></stat-tile>
    <stat-tile
      v-if="char.hitPoints && char.hitPoints.calculated"
      :label="'Hit Points'"
      :value="char.hitPoints.calculated.toString()"
    ></stat-tile>
    <stat-tile
      v-if="speed"
      :label="'Walking Speed'"
      :value="speed+'ft'"
    ></stat-tile>
    <ability-scores
      v-if="char.abilityScores"
      :char="char"
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
      if (!this.char || !this.char.race) return null
      if (this.char.subrace)
        return this.char.race.subraces.find(s => s.id == this.char.subrace)
    },
    speed() {
      if (!this.char.race) return null
      return (
        this.subrace.traits.SPEED ||
        this.char.race.traits.SPEED ||
        this.char.traits.SPEED
      )
    },
  },
  props: {
    char: Object,
  },
}
</script>