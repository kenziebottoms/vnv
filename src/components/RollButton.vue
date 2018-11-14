<template>
  <section>
    <button
      v-if="showButton"
      @click="roll(die, mod)"
    >
      Roll
    </button>
    <div v-else>
      {{result}}
    </div>
  </section>
</template>
<script>
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
    die: {
      type: Number,
      default: 20,
    },
    mod: {
      type: Number,
      default: 0,
    },
  },
}
</script>