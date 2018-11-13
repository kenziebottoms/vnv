<template>
  <div id="app">
    <section v-if="activeUser">
      Welcome, {{activeUser.username}}
      <button @click="logout">Log out</button>
      <stats
        :stats="activeUser.stats"
      ></stats>
    </section>
    <section v-else>
      select user
    </section>
  </div>
</template>

<script>
import Stats from './components/Stats.vue'
import users from './api/users'
let { getUser, createUser } = users
const ls = window.localStorage

export default {
  name: 'app',
  components: {
    Stats,
  },
  async created() {
    this.activeUser = await this.getActiveUser()
  },
  data() {
    return {
      activeUser: null,
    }
  },
  methods: {
    async getActiveUser() {
      if (ls.getItem('vnvUserId')) {
        let userId = ls.getItem('vnvUserId')
        return getUser(userId)
      } else {
        return null
      }
    },
    logout() {
      ls.removeItem('vnvUserId')
      this.activeUser = null
    },
  },
}
</script>