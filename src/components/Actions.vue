<template>
  <section>
    <icon-button
      :slug="'battery-half'"
      :label="'Short Rest'"
    ></icon-button>
    <icon-button
      :slug="'battery-full'"
      :label="'Long Rest'"
    ></icon-button>
  </section>
</template>
<script>
import IconButton from './elements/IconButton.vue'
export default {
  components: {
    IconButton,
  },
}
</script>
