<template>
  <section id="levelUp" class="tab">
    <section>
      <stat-tile
        v-if="finalAbilityScores"
        v-for="(stat, index) in finalAbilityScores"
        v-on:click.native="select(index)"
        :key="index"
        :value="stat"
        :label="index"
        :class="{'has-shadow': isSelected(index)}"
      ></stat-tile>
    </section>
  </section>
</template>
<script>
import StatTile from '../elements/StatTile.vue'

import _ from 'lodash'

import stats from '../../utils/stats'
let { totalAbilityScores } = stats

export default {
  components: {
    StatTile,
  },
  computed: {
    finalAbilityScores() {
      return totalAbilityScores(this.char)
    },
  },
  data() {
    return {
      selected: [],
    }
  },
  methods: {
    select(index) {
      if (!this.isSelected(index) && this.selected.length >= 2) {
        // you can't spend more than 2 ability points error message
      } else if (this.isSelected(index)) {
        _.pull(this.selected, index)
      } else if (!this.isSelected(index) && this.selected.length < 2) {
        this.selected.push(index)
      }
    },
    isSelected(index) {
      return _.includes(this.selected, index)
    },
  },
  props: {
    char: Object,
  },
}
</script>