<template src="./stadistic.html"></template>
<style src="./stadistic.css"></style>
<script>
  import VueKnob from 'vue-knob'

  export default {
    data() {
      return {
      }
    },
    computed: {
      corners_local() { return this.item.incidents_local ? this.item.incidents_local.corner : '-' },
      corners_visit() { return this.item.incidents_visit ? this.item.incidents_visit.corner : '-' },
      yellow_cards_local() { return this.item.incidents_local ? this.item.incidents_local.yellow_card : '-' },
      yellow_cards_visit() { return this.item.incidents_visit ? this.item.incidents_visit.yellow_card : '-' },
      red_cards_local() { return this.item.incidents_local ? this.item.incidents_local.red_card : '-' },
      red_cards_visit() { return this.item.incidents_visit ? this.item.incidents_visit.red_card : '-' },
      outsides_local() { return this.item.incidents_local ? this.item.incidents_local.outside : '-' },
      outsides_visit() { return this.item.incidents_visit ? this.item.incidents_visit.outside : '-' },
      passes_corrects_local() { return this.item.incidents_local ? this.item.incidents_local.passes_correct : '-' },
      passes_corrects_visit() { return this.item.incidents_visit ? this.item.incidents_visit.passes_correct : '-' },
      percentAveragePosetionVisit() { return this.item.ball_posessions ? this.item.ball_posessions.visit_posession : '-' },
      percentShotsVisit() { return this.item.incidents_visit ? (this.item.incidents_visit.shots_to_arc * 100)/(this.item.incidents_local.shots_to_arc + this.item.incidents_visit.shots_to_arc) : '-' },
      percentFoulsVisit() { return this.item.incidents_visit ? (this.item.incidents_visit.fouls_committed * 100)/(this.item.incidents_local.fouls_committed + this.item.incidents_visit.fouls_committed) : '-' }
    },
    props: ['item'],
    components: {
      VueKnob
    },
    mounted() {
      let APosetionText = document.querySelectorAll('.boxAveragePosetion svg g text'),
          AGoalText = document.querySelectorAll('.boxPercentShots svg g text'),
          AMatchText = document.querySelectorAll('.boxPercentFouls svg g text'),
          SegmentPosetion = document.querySelectorAll('.boxAveragePosetion svg .segment'),
          SegmentGoal = document.querySelectorAll('.boxPercentShots svg .segment'),
          SegmentMatch = document.querySelectorAll('.boxPercentFouls svg .segment');

      APosetionText.forEach(el => el.innerHTML = '%');
      AGoalText.forEach(el => el.innerHTML = '%');
      AMatchText.forEach(el => el.innerHTML = '');

      SegmentPosetion.forEach(el => el.setAttribute('stroke', '#fe4600'))
      SegmentGoal.forEach(el => el.setAttribute('stroke', '#4c8ee2'))
      SegmentMatch.forEach(el => el.setAttribute('stroke', '#4ee4c1'))
    }
  }
</script>
