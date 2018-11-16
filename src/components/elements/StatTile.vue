<template>
  <div class="statTile">
    <div>
      <label>
        {{label}}
      </label>
      <div v-if="!adjustable">
        {{value}}
      </div>
      <adjustable-number
        v-else
        :value="parseInt(value)"
      >
      </adjustable-number>
    </div>
  </div>
</template>
<script>
import '../../assets/scss/components/statTile.scss'
import AdjustableNumber from './AdjustableNumber.vue'
export default {
  components: {
    AdjustableNumber,
  },
  props: {
    label: String,
    value: String,
    adjustable: Boolean,
  },
}
</script>