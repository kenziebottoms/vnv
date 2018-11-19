<template>
  <section v-if="char">
    <h1>{{char.name}}</h1>
    <stat-tile
      v-if="char.level"
      :label="'Level'"
      :adjustable="true"
      @increment="$emit('levelUp')"
      @decrement="$emit('levelDown')"
      :value="char.level"
    ></stat-tile>
    <stat-tile
      v-if="char.race"
      :label="'Race'"
      :suffix="subrace.name || char.race.name"
    ></stat-tile>
    <stat-tile
      v-if="char.class"
      :label="'Class'"
      :suffix="char.class.name"
    ></stat-tile>
    <hr>
    <stat-tile
      v-if="char.age"
      :label="'Age'"
      :value="char.age"
    ></stat-tile>
    <hr>
    <h2>Stats</h2>
    <stat-tile
      v-if="char.hitPoints && char.hitPoints.base"
      :label="'Base Hit Points'"
      :value="char.hitPoints.base"
    ></stat-tile>
    <stat-tile
      v-if="char.hitPoints && char.hitPoints.calculated"
      :label="'Hit Points'"
      :value="char.hitPoints.calculated"
    ></stat-tile>
    <stat-tile
      v-if="speed"
      :label="'Walking Speed'"
      :value="speed"
      :suffix="'ft'"
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
import StatTile from './../elements/StatTile.vue'
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
      return this.subrace.speed || this.char.race.speed
    },
  },
  props: {
    char: Object,
  },
}
</script>