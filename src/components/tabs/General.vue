<template>
  <section v-if="char">
    <h1>{{char.name}}</h1>
    <stat-tile
      v-if="char.level"
      :label="'Level'"
      :adjustable="true"
      @increment="$emit('levelUp')"
      @decrement="$emit('levelDown')"
      :value="char.level"
    ></stat-tile>
    <hp-tile
      v-if="currentHp && hp"
      :value="currentHp"
      :max="hp"
      v-on:click.native="$emit('selectTab', 'COMBAT')"
    ></hp-tile>
    <stat-tile
      v-if="speed"
      :label="'Walking Speed'"
      :value="speed"
      :suffix="'ft'"
    ></stat-tile>
    <hr>
    <h2>Ability Scores</h2>
    <ability-scores
      :show-roll-buttons="false"
      v-if="char.abilityScores"
      :char="char"
    ></ability-scores>
  </section>
</template>
<script>
import stats from '../../utils/stats'
let { getHitPoints, totalAbilityScores } = stats
import AbilityScores from './../AbilityScores.vue'
import StatTile from './../elements/StatTile.vue'
import HpTile from './../elements/HpTile.vue'
import Actions from '../Actions.vue'
export default {
  components: {
    Actions,
    AbilityScores,
    HpTile,
    StatTile,
  },
  computed: {
    hp() {
      return getHitPoints(
        this.char.level,
        this.char.hitDice,
        totalAbilityScores(this.char).CON
      )
    },
    currentHp() {
      return this.hp - this.char.damage
    },
    subrace() {
      if (!this.char || !this.char.race) return null
      if (this.char.subrace) {
        return this.char.race.subraces.find(s => s.id == this.char.subrace)
      } else {
        return this.char.race
      }
    },
    speed() {
      if (!this.char.race) return null
      return this.subrace.speed || this.char.race.speed
    },
  },
  props: {
    char: Object,
  },
}
</script>