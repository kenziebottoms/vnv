<template>
  <section class="statGrid" id="stats">
    {{stats.STR}}
    {{stats.DEX}}
    {{stats.CON}}
    {{stats.WIS}}
    {{stats.INT}}
    {{stats.CHA}}
  </section>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    stats: Object,
  },
}
</script>