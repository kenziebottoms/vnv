<template>
  <select id="user">
    <option default value="">Choose a user</option>
    <option
      :value="user.id"
      v-for="user in users"
      :key="user.id"
      :selected="user.id==selected"
      v-on:click="$emit('select', user.id)"
    >
      {{user.username}}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    users: Array,
    selected: String,
  },
}
</script>