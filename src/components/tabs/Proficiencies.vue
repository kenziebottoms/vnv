<template>
  <section id="proficiencies">
    <stat-tile
      :label="'Proficiency Bonus'"
      :suffix="printModifier(proficiencyBonus)"
    >
    </stat-tile>
    <h3>Skills</h3>
    <section v-if="char.class.proficiencies && char.skills">
      <h4>From {{char.class.name}} Class</h4>
      <ul>
        <li
          v-if="Array.isArray(options) && options.length > 1"
          :key="index"
          v-for="(options, index) in char.class.proficiencies.skills"
        >
          <dropdown
            :id="'classSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.skills.classProficiencies[index]"
            :items="options"
          ></dropdown>
        </li>
        <li v-else-if="options && !Array.isArray(options)">{{options}}</li>
      </ul>
    </section>
    <section v-if="char.race.proficiencies">
      <h4>From {{char.race.name}} Race</h4>
      <ul v-if="char.race.proficiencies">
        <li
          v-if="Array.isArray(options) && options.length > 1"
          :key="index"
          v-for="(options, index) in char.race.proficiencies.skills"
        >
          <dropdown
            :id="'raceSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.skills.raceProficiencies[index]"
            :items="options"
          ></dropdown>
        </li>
        <li v-else-if="options && !Array.isArray(options)">{{options}}</li>
      </ul>
    </section>
    <section v-if="char.subrace.proficiencies">
      <h4>From {{subrace.name}} Subrace</h4>
      <ul v-if="subrace.proficiencies">
        <li
          v-if="Array.isArray(options) && options.length > 1"
          :key="index"
          v-for="(options, index) in subrace.proficiencies.skills"
        >
          <dropdown
            :id="'subraceSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.skills.subraceProficiencies[index]"
            :items="options"
          ></dropdown>
        </li>
        <li v-else-if="options && !Array.isArray(options)">{{options}}</li>
      </ul>
    </section>
    <button v-on:click="save">Save</button>
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
