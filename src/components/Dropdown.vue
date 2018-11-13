<template>
  <select>
    <option default value="">{{label}}</option>
    <option
      :value="item.id"
      v-for="item in items"
      :key="item.id"
      :selected="item.id==selected"
      v-on:click="$emit('select', item.id)"
    >
      {{item[displayProp]}}
    </option>
  </select>
</template>
<script>
export default {
  props: {
    label: String,
    items: Array,
    selected: String,
    displayProp: String,
  },
}
</script>