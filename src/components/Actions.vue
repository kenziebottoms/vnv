<template>
  <section>
    <icon-button
      :slug="'bed'"
      :faded="true"
      :label="'Short Rest'"
    ></icon-button>
    <icon-button
      :slug="'bed'"
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
