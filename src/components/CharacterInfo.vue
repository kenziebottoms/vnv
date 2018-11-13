<template>
  <section>
    <h3>Base stats</h3>
    <stats v-if="char.baseStats"
      :stats="char.baseStats"
    ></stats>
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