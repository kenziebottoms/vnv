<template>
  <section id="combat" class="tab">
    <ability-scores
      :char="char"
      :show-roll-buttons="true"
    ></ability-scores>
  </section>
</template>
<script>
import AbilityScores from './../AbilityScores.vue'
export default {
  components: {
    AbilityScores,
  },
  props: {
    char: Object,
  },
}
</script>