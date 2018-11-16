<template>
  <section v-if="char">
    <h1>{{char.name}}</h1>
    <stat-tile
      v-if="char.level"
      :label="'Level'"
      :value="char.level.toString()"
    ></stat-tile>
    <stat-tile
      v-if="char.race"
      :label="'Race'"
      :value="subrace.name || char.race.name"
    ></stat-tile>
    <stat-tile
      v-if="char.class"
      :label="'Class'"
      :value="char.class.name"
    ></stat-tile>
    <hr>
    <stat-tile
      v-if="char.age"
      :label="'Age'"
      :value="char.age.toString()"
    ></stat-tile>
    <hr>
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
    <hr>
    <h2>Ability Scores</h2>
    <ability-scores
      :show-roll-buttons="false"
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
      if (this.char.subrace) {
        return this.char.race.subraces.find(s => s.id == this.char.subrace)
      } else {
        return this.char.race
      }
    },
    speed() {
      if (!this.char.race) return null
      return this.subrace.traits.speed || this.char.race.traits.speed
    },
  },
  props: {
    char: Object,
  },
}
</script>