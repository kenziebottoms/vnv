<template>
  <div class="adjustable-number">
    {{value}}
    <div class="icons">
      <span
        class="fa-stack"
        v-on:click="$emit('increment')"
      >
        <i class="fas fa-circle fa-stack-2x green"></i>
        <i class="fas fa-chevron-up fa-stack-1x fa-inverse"></i>
      </span>
      <span
        class="fa-stack"
        v-on:click="$emit('decrement')"
      >
        <i class="fas fa-circle fa-stack-2x red"></i>
        <i class="fas fa-chevron-down fa-stack-1x fa-inverse"></i>
      </span>
    </div>
  </div>
</template>
<script>
import '../../assets/scss/components/adjustableNumber.scss'
export default {
  props: {
    value: Number,
  },
}
</script>