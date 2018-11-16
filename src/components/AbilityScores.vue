<template>
  <section class="abilityScores">
    <div class="z-depth-2" v-for="(stat, label) in finalAbilityScores" :key="label">
      <div class="stat-label">
        <span>{{label}}</span>
      </div>
      <div class="modifier">
        <div
          class="tooltip is-tooltip-top"
          :data-tooltip="breakdown(label)"
        >
          {{printModifier(modifier(stat))}}
        </div>
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
    abilityScoreImprovements() {
      return totalAbilityScores(
        this.char.abilityScores.improvements.filter(
          i => i.level <= this.char.level
        )
      )
    },
    raceBonuses() {
      let subraceBonuses = {}
      if (this.char.subrace) {
        subraceBonuses = _.cloneDeep(
          this.char.race.subraces.find(sr => sr.id == this.char.subrace)
            .abilityScores
        )
      }
      let raceBonuses = _.cloneDeep(this.char.race.abilityScores)
      return totalAbilityScores([raceBonuses, subraceBonuses])
    },
    proficiency() {
      return Math.floor(this.char.level / 4 + 2)
    },
    finalAbilityScores() {
      return totalAbilityScores([
        this.raceBonuses,
        this.abilityScoreImprovements,
        this.char.abilityScores.base,
      ])
    },
  },
  methods: {
    printModifier(mod) {
      return (mod >= 0 ? '+' : '') + mod
    },
    saveProficiency(stat) {
      return _.includes(this.char.class.traits.savingThrows, stat)
    },
    breakdown(stat) {
      return `Base: ${this.char.abilityScores.base[stat]}
              Level-ups: ${this.abilityScoreImprovements[stat]}`
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