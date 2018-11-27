<template>
  <section id="alignment" class="grid">
    <div></div>
    <div class="header">Lawful</div>
    <div class="header">Neutral</div>
    <div class="header">Chaotic</div>

    <div class="header side">Good</div>
    <div :class="{selected: this.value == 0}">{{alignments[0]}}</div>
    <div :class="{selected: this.value == 1}">{{alignments[1]}}</div>
    <div :class="{selected: this.value == 2}">{{alignments[2]}}</div>

    <div class="header side">Neutral</div>
    <div :class="{selected: this.value == 3}">{{alignments[3]}}</div>
    <div :class="{selected: this.value == 4}">{{alignments[4]}}</div>
    <div :class="{selected: this.value == 5}">{{alignments[5]}}</div>

    <div class="header side">Evil</div>
    <div :class="{selected: this.value == 6}">{{alignments[6]}}</div>
    <div :class="{selected: this.value == 7}">{{alignments[7]}}</div>
    <div :class="{selected: this.value == 8}">{{alignments[8]}}</div>
  </section>
</template>
<script>
import '../../assets/scss/components/alignmentGrid.scss'
export default {
  data() {
    return {
      alignments: [
        'Crusader',
        'Benefactor',
        'Rebel',
        'Judge',
        'Undecided',
        'Free Spirit',
        'Dominator',
        'Malefactor',
        'Destroyer',
      ],
    }
  },
  props: {
    value: Number,
  },
}
</script>