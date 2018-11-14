<template>
  <div class="select is-primary">
  <select @input="e => {$emit('input', parseInt(e.target.value))}">
      <option default value="">{{label}}</option>
      <option
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        :selected="item.id==value"
      >
        {{item[displayProp]}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    items: Array,
    value: Number,
    displayProp: String,
  },
}
</script>