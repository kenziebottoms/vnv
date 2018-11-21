<template>
  <div class="select is-primary">
  <select @input="e => {$emit('input', e.target.value)}">
      <option default value="">{{label}}</option>
      <option
        v-for="(item, index) in items"
        :key="item.id || index"
        :value="item.id || item"
        :selected="(item.id || item)==value"
      >
        {{item[displayProp] || item}}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    items: Array,
    value: String,
    displayProp: String,
  },
}
</script>