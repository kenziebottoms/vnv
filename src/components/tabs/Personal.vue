<template>
  <section v-if="char">
    <stat-tile
      :label="'Name'"
      :suffix="char.fullName || char.name"
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
    <stat-tile
      v-if="char.age"
      :label="'Age'"
      :value="char.age"
    ></stat-tile>
  </section>
</template>
<script>
import StatTile from '../elements/StatTile.vue'
export default {
  components: {
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
  },
  props: {
    char: Object,
  },
}
</script>

