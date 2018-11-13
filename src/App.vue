<template>
  <div id="app">
    <section v-if="activeUser">
      <h2>Welcome, {{activeUser.username}}</h2>
      <stats
        :stats="activeUser.stats"
      ></stats>
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
  </div>
</template>

<script>
import Stats from './components/Stats.vue'
import Dropdown from './components/Dropdown.vue'
import users from './api/users'
let { getUser, createUser, getAllUsers } = users
const ls = window.localStorage

export default {
  name: 'app',
  components: {
    Stats,
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
    activeUserId: {
      get() {
        if (ls.getItem('vnvUserId')) {
          return ls.getItem('vnvUserId')
        }
      },
      set(item) {
        ls.setItem('vnvUserId', item)
      },
    },
  },
  created() {
    this.getAllUsers()
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async getAllUsers() {
      this.users = await getAllUsers()
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
    logout() {
      this.activeUserId = null
    },
    activateUser(id) {
      this.activeUserId = this.users.find(u => u.id == id).id
    },
  },
}
</script>