<template>
  <section id="inventory" class="tab">
    <h4 v-if="char.weapons">Weapons &amp; Armor</h4>
    <section>
      <ul>
        <li :key="weapon.name" v-for="weapon in char.weapons">
          {{weapon.name}}
          <span v-if="weapon.equipped">(Equipped)</span>
        </li>
        <li :key="armor.name" v-for="armor in char.armor">
          {{armor.name}}
          <span v-if="armor.equipped">(Equipped)</span>
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    char: Object,
  },
}
</script>