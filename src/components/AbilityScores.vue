<template>
  <section class="abilityScores">
    <div class="z-depth-2" v-for="(stat, label) in currentAbilityScores" :key="label">
      <div class="stat-label">
        <span>{{label}}</span>
      </div>
      <div class="modifier">
        {{getModifier(stat)}}
        <roll-button
          :label="'Check'"
          :mod="parseInt(getModifier(stat))"
        ></roll-button>
        <roll-button
          :label="'Saving Throw'"
          :mod="parseInt(getModifier(stat))"
        ></roll-button>
      </div>
      <div class="stat">{{stat}}</div>
    </div>
  </section>
</template>

<script>
import RollButton from './RollButton.vue'
import stats from '../utils/stats'
export default {
  name: 'AbilityScores',
  components: {
    RollButton,
  },
  computed: {
    currentAbilityScores() {
      return stats.calculateAbilityScores(
        this.abilityScores.base,
        this.abilityScores.improvements
      )
    },
  },
  methods: {
    getModifier(stat) {
      return (stat > 10 ? '+' : '') + Math.floor((stat - 10) / 2).toString()
    },
  },
  props: {
    abilityScores: Object,
    level: Number,
  },
}
</script>