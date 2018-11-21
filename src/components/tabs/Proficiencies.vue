<template>
  <section>
    <h2>Skills</h2>
    <section v-if="char.class.proficiencies.skills">
      <h3>By Class</h3>
      <ul>
        <li :key="index" v-for="(options, index) in char.class.proficiencies.skills">
          <dropdown
            :id="'classSkillProficiency-'+index"
            :label="'Choose a skill proficiency'"
            v-model="char.skills.classProficiencies[index]"
            :items="options"
          ></dropdown>
        </li>
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
