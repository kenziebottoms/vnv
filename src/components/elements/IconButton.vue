<template>
  <div class="icon-button button">
    <i :class="iconClass"></i>
    {{label}}
  </div>
</template>
<script>
import '../../assets/scss/components/iconButton.scss'
export default {
  computed: {
    iconClass() {
      return `fas fa-2x fa-${this.slug}`
    },
  },
  props: {
    slug: String,
    label: String,
  },
}
</script>
