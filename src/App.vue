<template>
  <div id="app">
    <section id="sidebar">
      <nav v-if="activeUser">
        <h2>Welcome, {{activeUser.username}}</h2>
      </nav>
      <dropdown
        v-if="users"
        :label="'Select a user'"
        :items="users"
        :displayProp="'username'"
        v-model="activeUserId"
        @input="activateUser"
      ></dropdown>
      <button @click="createUser" type="button" class="button is-light is-small">New User</button>
      <dropdown
        v-if="activeUserId && characters && characters.length > 0"
        :label="'Select a character'"
        :items="characters"
        :displayProp="'name'"
        v-model="activeCharacterId"
        @input="activateCharacter"
      ></dropdown>
      <button @click="createCharacter" type="button" class="button is-light is-small">New Character</button>
      <hr>
      <aside class="menu">
        <ul class="menu-list">
          <li
            v-for="item in menu"
            :key="item.slug"
          >
            <a
              :class="{'is-active': tab==item.slug}"
              @click="tab=item.slug"
            >{{item.menuItem}}</a>
          </li>
        </ul>
      </aside>
    </section>
    <section id="main" v-if="characterData">
      <general-tab
        v-if="tab=='DEFAULT'"
        :char="characterData"
      ></general-tab>
      <combat-tab
        v-if="tab=='COMBAT'"
        :char="characterData"
      ></combat-tab>
      <level-up-tab
        v-if="tab=='LEVEL_UP'"
        :char="characterData"
      ></level-up-tab>
    </section>
  </div>
</template>

<script>
import Dropdown from './components/elements/Dropdown.vue'
import GeneralTab from './components/tabs/General.vue'
import CombatTab from './components/tabs/Combat.vue'
import LevelUpTab from './components/tabs/LevelUp.vue'

import users from './api/users'
import races from './api/races'
import chars from './api/characters'

let { getUser, createUser, getAllUsers } = users
let { getRaceById } = races
let {
  getCharacterWithClassAndRace,
  createCharacter,
  getCharactersByUser,
} = chars

import stats from './utils/stats.js'
let { calculateAbilityScores } = stats

const ls = window.localStorage

export default {
  name: 'app',
  components: {
    CombatTab,
    Dropdown,
    GeneralTab,
    LevelUpTab,
  },
  computed: {
    activeUser() {
      if (this.activeUserId && users.length > 0) {
        return users.find(u => u.id == this.activeUserId)
      } else {
        return null
      }
    },
    activeCharacter() {
      if (
        this.activeCharacterId &&
        this.characters &&
        this.characters.length > 0
      ) {
        return this.characters.find(c => c.id == this.activeCharacterId)
      } else {
        return null
      }
    },
  },
  created() {
    this.getAllUsers()
    if (this.activeUserId != null) {
      this.getUsersCharacters(this.activeUserId)
    }
  },
  data() {
    return {
      users: [],
      characters: [],
      characterData: null,
      activeUserId: null,
      activeCharacterId: null,
      tab: 'DEFAULT',
      menu: [
        {
          slug: 'DEFAULT',
          menuItem: 'General',
        },
        {
          slug: 'COMBAT',
          menuItem: 'Combat',
        },
        {
          slug: 'LEVEL_UP',
          menuItem: 'Level Up',
        },
      ],
    }
  },
  methods: {
    async getAllUsers() {
      this.users = await getAllUsers()
    },
    async getUsersCharacters(id) {
      this.characters = await getCharactersByUser(id)
    },
    async getCharacterData(id) {
      this.characterData = await getCharacterWithClassAndRace(id)
    },
    async createUser() {
      let username = prompt('username?')
      if (username == '') return null
      let user = await createUser({
        username,
        created: Date.now(),
      })
      this.users.push(user)
      this.activeUserId = user.id
    },
    async createCharacter() {
      let name = prompt('Character name?')
      let char = await createCharacter({
        name,
        created: Date.now(),
        owner: this.activeUserId,
      })
      this.characters.push(char)
      this.activeCharacterId = char.id
    },
    activateUser(id) {
      this.activeUserId = id
    },
    activateCharacter(id) {
      this.activeCharacterId = id
    },
  },
  mounted() {
    if (ls.getItem('vnvUserId'))
      this.activeUserId = parseInt(ls.getItem('vnvUserId'))
    if (ls.getItem('vnvCharId'))
      this.activeCharacterId = parseInt(ls.getItem('vnvCharId'))
  },
  watch: {
    activeUserId(newId) {
      ls.setItem('vnvUserId', newId)
      this.characterData = null
      this.getUsersCharacters(newId)
    },
    activeCharacterId(newId) {
      ls.setItem('vnvCharId', newId)
      this.characterData = null
      this.getCharacterData(newId)
    },
  },
}
</script>