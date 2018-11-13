<template>
  <section class="statGrid" id="stats">
    <div>
      <div class="box-shadow-medium" v-for="(key, val) in stats" :key="key">
        <div class="stat-label">
          <span>{{val}}</span>
          <button v-on:click="$emit('roll', 1, 20)">Roll</button>
        </div>
        <div class="modifier">{{getModifier(key)}}</div>
        <div class="stat">{{key}}</div>
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