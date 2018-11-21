<template>
  <section class="abilityScores">
    <div class="z-depth-2" v-for="(stat, label) in finalAbilityScores" :key="label">
      <div class="stat-label">
        <span>{{label}}</span>
      </div>
      <div class="modifier">
        {{printModifier(getModifier(stat))}}
        <roll-button
          v-if="showRollButtons"
          :label="'Check'"
          :mod="getModifier(stat)"
        ></roll-button>
        <roll-button
          v-if="showRollButtons"
          :label="'Saving Throw'"
          :icon="saveProficiency(label) ? 'plus' : null"
          :classes="['has-text-success']"
          :mod="getModifier(stat)+saveBonus(label)"
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
let { totalAbilityScores, getModifier, printModifier } = stats

export default {
  name: 'AbilityScores',
  components: {
    RollButton,
  },
  computed: {
    finalAbilityScores() {
      return totalAbilityScores(this.char)
    },
  },
  methods: {
    printModifier,
    saveProficiency(stat) {
      return _.includes(this.char.class.savingThrows, stat)
    },
    saveBonus(stat) {
      return this.saveProficiency(stat) ? this.proficiency : 0
    },
    getModifier,
  },
  props: {
    showRollButtons: Boolean,
    char: Object,
    proficiency: Number,
  },
}
</script>