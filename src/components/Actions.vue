<template>
  <section v-if="char">
    <icon-button
      :slug="'battery-half'"
      :label="'Short Rest'"
    ></icon-button>
    <icon-button
      :slug="'battery-full'"
      :label="'Long Rest'"
    ></icon-button>
    <icon-button v-if="char.class.id == 1 || char.class == 1"
      :slug="'feather'"
      :label="'Wild Shape'"
    ></icon-button>
  </section>
</template>
<script>
import IconButton from './elements/IconButton.vue'
export default {
  components: {
    IconButton,
  },
  props: {
    char: Object,
  },
}
</script>
