<template>
  <section id="proficiencies" class="tab">
    <section>
      <stat-tile
        :label="'Proficiency Bonus'"
        :suffix="printModifier(proficiencyBonus)"
      >
      </stat-tile>
    </section>
    <h3>Skills</h3>
    <h4 v-if="char.class.proficiencies">From {{char.class.name}} Class</h4>
    <section v-if="char.class.proficiencies">
      <ul>
        <li
          v-for="(options, index) in char.class.proficiencies.skills"
          :key="index"
          v-if="options"
        >
          <dropdown
            v-if="Array.isArray(options) && options.length > 1"
            :id="'classSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.proficiencies.skills.classBonus[index]"
            :items="options"
          ></dropdown>
          <span v-else>{{options}}</span>
        </li>
      </ul>
    </section>
    <h4 v-if="char.race.proficiencies">From {{char.race.name}} Race</h4>
    <section v-if="char.race.proficiencies && char.proficiencies.skills.raceBonus">
      <ul>
        <li
          v-for="(options, index) in char.race.proficiencies.skills"
          :key="index"
          v-if="options"
        >
          <dropdown
            v-if="Array.isArray(options) && options.length > 0"
            :id="'raceSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.proficiencies.raceBonus[index]"
            :items="options"
          ></dropdown>
          <span v-else>{{options}}</span>
        </li>
      </ul>
    </section>
    <h4 v-if="subrace.proficiencies">From {{subrace.name}} Subrace</h4>
    <section v-if="subrace.proficiencies">
      <ul>
        <li
          v-for="(options, index) in subrace.proficiencies.skills"
          :key="index"
          v-if="options"
        >
          <dropdown
            v-if="Array.isArray(options) && options.length > 0"
            :id="'subraceSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.proficiencies.skills.subraceBonus[index]"
            :items="options"
          ></dropdown>
          <span v-else>{{options}}</span>
        </li>
      </ul>
    </section>
    <button class="button" v-on:click="save">Save</button>
  </section>
</template>
<script>
import Dropdown from '../elements/Dropdown.vue'
import StatTile from '../elements/StatTile.vue'

import stats from '../../utils/stats'
let { totalAbilityScores, printModifier } = stats

export default {
  components: {
    StatTile,
    Dropdown,
  },
  methods: {
    objectify(list) {
      return list.map(item => {
        return { item }
      })
    },
    save() {
      alert(validateForm())
    },
    printModifier,
  },
  props: {
    char: Object,
    subrace: Object,
    proficiencyBonus: Number,
  },
}
</script>
