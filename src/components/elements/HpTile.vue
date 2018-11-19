<template>
  <div class="statTile hpTile">
    <div>
      <label>Hit Points</label>
      <div v-if="!adjustable">
        {{value}}/{{max}}
      </div>
      <adjustable-number
        v-else
        :value="value"
        :suffix="'/'+max.toString()"
        @increment="$emit('increment')"
        @decrement="$emit('decrement')"
      >
      </adjustable-number>
      <div class="meter">
        <div :class="{health: true, red: value/max < .25}" :style="{width: (value/max)*100+'%'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
import AdjustableNumber from './AdjustableNumber.vue'
import '../../assets/scss/components/statTile.scss'
import '../../assets/scss/components/hpTile.scss'
export default {
  components: {
    AdjustableNumber,
  },
  props: {
    value: Number,
    adjustable: Boolean,
    max: Number,
  },
}
</script>