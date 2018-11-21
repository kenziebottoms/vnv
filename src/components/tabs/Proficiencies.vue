<template>
  <section>
    <h2>Skills</h2>
    <section v-if="char.class.proficiencies.skills">
      <h3>By Class</h3>
      <ul>
        <li
          :key="index"
          v-for="(options, index) in char.class.proficiencies.skills"
          v-if="char.class.proficiencies.skills.length > 1"
        >
          <dropdown
            :id="'classSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.skills.classProficiencies[index]"
            :items="options"
          ></dropdown>
        </li>
        <li v-else>{{options}}</li>
      </ul>
    </section>
    <section v-if="char.race.proficiencies.skills">
      <h3>By Race</h3>
      <ul>
        <li
          :key="index"
          v-for="(options, index) in char.race.proficiencies.skills"
          v-if="char.race.proficiencies.skills.length > 1"
        >
          <dropdown
            :id="'classSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.skills.raceProficiencies[index]"
            :items="options"
          ></dropdown>
        </li>
        <li v-else-if="char.race.proficiencies.skills">{{char.race.proficiencies.skills[0]}}</li>
      </ul>
    </section>
    <button v-on:click="save">Save</button>
  </section>
</template>
<script>
import Dropdown from '../elements/Dropdown.vue'
export default {
  components: {
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
    validateForm() {},
  },
  props: {
    char: Object,
  },
}
</script>
