<template>
  <div id="app">
    <section v-if="activeUser">
      <h2>Welcome, {{activeUser.username}}</h2>
    </section>
    <dropdown
      id="user"
      :label="'Select a user'"
      :items="users"
      :displayProp="'username'"
      :selected.sync="activeUserId"
      @select="activateUser"
    ></dropdown>
    <button @click="createUser" type="button">New User</button>
    <hr>
    <dropdown
      v-if="activeUserId && characters && characters.length > 0"
      id="char"
      :label="'Select a character'"
      :items="characters"
      :displayProp="'name'"
      :selected.sync="activeCharacterId"
      @select="activateCharacter"
    ></dropdown>
    <button @click="createCharacter" type="button">New Character</button>
    <section v-if="characters && activeCharacterId">
      <character-info
        v-if="activeCharacter"
        :char="activeCharacter"
      ></character-info>
    </section>
  </div>
</template>

<script>
import CharacterInfo from './components/CharacterInfo.vue'
import Dropdown from './components/Dropdown.vue'
import users from './api/users'
import chars from './api/characters'

let { getUser, createUser, getAllUsers } = users
let { getCharactersByUser, createCharacter } = chars

const ls = window.localStorage

export default {
  name: 'app',
  components: {
    CharacterInfo,
    Dropdown,
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
    activeUserId: {
      get() {
        return ls.getItem('vnvUserId') || null
      },
      set(item) {
        ls.setItem('vnvUserId', item)
        this.activeCharacterId = null
        this.characters = null
        this.getUsersCharacters(item)
      },
    },
    activeCharacterId: {
      get() {
        if (ls.getItem('vnvCharId')) {
          return ls.getItem('vnvCharId')
        }
      },
      set(item) {
        ls.setItem('vnvCharId', item)
      },
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
    }
  },
  methods: {
    async getAllUsers() {
      this.users = await getAllUsers()
    },
    async getUsersCharacters(id) {
      this.characters = await getCharactersByUser(id)
    },
    async createUser() {
      let username = prompt('username?')
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
      this.activeUserId = this.users.find(u => u.id == id).id
    },
    activateCharacter(id) {
      this.activeCharacterId = this.characters.find(c => c.id == id).id
    },
  },
}
</script>