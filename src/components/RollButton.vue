<template>
  <button
    class="roll button is-small is-light"
    @click="roll(die, mod)"
  >
    {{showButton ? (label || 'Roll') : result}}
    <span v-if="icon" :class="[...classes, 'icon']">
      <i :class="'fas fa-'+icon"></i>
    </span>
  </button>
</template>
<script>
import '../assets/scss/components/rollButton.scss'
export default {
  data() {
    return {
      result: null,
      showButton: {
        type: Boolean,
        default: true,
      },
    }
  },
  methods: {
    /**
     * - generates a random number between 1 and `dieSides` inclusive
     * - adds the modifier
     * - returns the result, or 1 if result is less than 1
     * - shows result for 1.5 seconds then hides it
     */
    roll(dieSides, modifier) {
      this.result = Math.floor(Math.random() * dieSides + 1) + modifier || 1
      this.showButton = false
      setTimeout(() => {
        this.showButton = true
      }, 1500)
    },
  },
  props: {
    classes: Array,
    die: {
      type: Number,
      default: 20,
    },
    icon: String,
    label: String,
    mod: {
      type: Number,
      default: 0,
    },
  },
}
</script>