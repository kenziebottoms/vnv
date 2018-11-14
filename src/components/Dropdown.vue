<template>
  <div class="input-field white-text">
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
  created() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select')
      var instances = M.FormSelect.init(elems, {})
    })
  },
  props: {
    label: String,
    items: Array,
    value: Number,
    displayProp: String,
  },
}
</script>