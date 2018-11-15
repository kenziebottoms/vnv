<template>
  <div class="statTile">
    <div>
      <label>
        {{label}}
      </label>
      <div>
        {{value}}
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/scss/components/statTile.scss'
export default {
  props: {
    label: String,
    value: String,
  },
}
</script>