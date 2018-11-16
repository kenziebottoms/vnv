<template>
  <section class="abilityScores">
    <div class="z-depth-2" v-for="(stat, label) in finalAbilityScores" :key="label">
      <div class="stat-label">
        <span>{{label}}</span>
      </div>
      <div class="modifier">
        {{printModifier(modifier(stat))}}
        <roll-button
          v-if="showRollButtons"
          :label="'Check'"
          :mod="modifier(stat)"
        ></roll-button>
        <roll-button
          v-if="showRollButtons"
          :label="'Saving Throw'"
          :icon="saveProficiency(label) ? 'plus' : null"
          :classes="['has-text-success']"
          :mod="modifier(stat)+saveBonus(label)"
        ></roll-button>
      </div>
      <div class="stat">{{stat}}</div>
    </div>
  </section>
</template>

<script>
import '../assets/scss/components/abilityScores.scss'

import RollButton from './elements/RollButton.vue'
import _ from 'lodash'

import stats from '../utils/stats'
let { totalAbilityScores } = stats

export default {
  name: 'AbilityScores',
  components: {
    RollButton,
  },
  computed: {
    proficiency() {
      return Math.floor(this.char.level / 4 + 2)
    },
    finalAbilityScores() {
      return totalAbilityScores(this.char)
    },
  },
  methods: {
    printModifier(mod) {
      return (mod >= 0 ? '+' : '') + mod
    },
    saveProficiency(stat) {
      return _.includes(this.char.class.traits.savingThrows, stat)
    },
    saveBonus(stat) {
      return this.saveProficiency(stat) ? this.proficiency : 0
    },
    modifier(stat) {
      return Math.floor((stat - 10) / 2)
    },
  },
  props: {
    showRollButtons: Boolean,
    char: Object,
  },
}
</script>