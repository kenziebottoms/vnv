<template>
  <section v-if="value">
    <section v-if="value.baseStats">
      <h3>Base stats</h3>
      <stats :stats="value.baseStats"></stats>
    </section>
  </section>
</template>
<script>
import Stats from './Stats.vue'
export default {
  components: {
    Stats,
  },
  props: {
    value: Object,
  },
}
</script>