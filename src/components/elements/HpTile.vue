<template>
  <div class="hp">
    <stat-tile
      :label="'Hit Points'"
      :value="value"
      :suffix="'/'+max.toString()"
      :adjustable="true"
    ></stat-tile>
    <div class="meter"></div>
  </div>
</template>
<script>
import StatTile from './StatTile.vue'
export default {
  components: {
    StatTile,
  },
  props: {
    value: Number,
    max: Number,
  },
}
</script>