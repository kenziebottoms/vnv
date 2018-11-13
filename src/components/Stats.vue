<template>
  <section class="statGrid" id="stats">
    <div>
      <div class="mdc-elevation--z4" v-for="(key, val) in stats" :key="key">
        <button class="mdc-button mdc-button--raised">{{key}}</button>
        <div>{{getModifier(key)}}</div>
        <button class="mdc-button mdc-button--raised">{{val}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Stats',
  methods: {
    getModifier(stat) {
      return (stat > 10 ? '+' : '') + Math.floor((stat - 10) / 2).toString()
    },
  },
  props: {
    stats: Object,
  },
}
</script>