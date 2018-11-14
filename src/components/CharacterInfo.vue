<template>
  <section v-if="char">
    <section v-if="char.baseStats">
      <h3>Base stats</h3>
      <stats :stats="char.baseStats"></stats>
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
    char: Object,
  },
}
</script>