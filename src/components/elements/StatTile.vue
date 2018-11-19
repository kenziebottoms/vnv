<template>
  <div class="statTile">
    <div>
      <label>
        {{label}}
      </label>
      <div v-if="!adjustable">
        {{value}}{{suffix}}
      </div>
      <adjustable-number
        v-else
        :value="value"
        :suffix="suffix"
        @increment="$emit('increment')"
        @decrement="$emit('decrement')"
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
    value: Number,
    suffix: String,
    adjustable: Boolean,
  },
}
</script>