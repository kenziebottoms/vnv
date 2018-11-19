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
      return `fas fa-2x fa-${this.slug} ${this.faded ? 'faded' : ''}`
    },
  },
  props: {
    slug: String,
    label: String,
    faded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
