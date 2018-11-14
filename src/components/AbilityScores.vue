<template>
  <section class="statGrid" id="abilityScores">
    <div>
      <div class="box-shadow-medium" v-for="(key, val) in currentAbilityScores" :key="val">
        <div class="stat-label">
          <span>{{val}}</span>
          <roll-button :mod="parseInt(getModifier(key))"></roll-button>
        </div>
        <div class="modifier">{{getModifier(key)}}</div>
        <div class="stat">{{key}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import RollButton from './RollButton.vue'
export default {
  name: 'AbilityScores',
  components: {
    RollButton,
  },
  computed: {
    currentAbilityScores() {
      let totals = Object.assign({}, this.abilityScores.base)
      this.abilityScores.improvements
        .filter(i => i.level <= this.level)
        .forEach(i => {
          for (let stat in totals) {
            if (i[stat]) totals[stat] += parseInt(i[stat])
          }
        })
      return totals
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