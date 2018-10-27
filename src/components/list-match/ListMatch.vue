<template src="./list-match.html"></template>
<style src="./list-match.css"></style>
<script>
  import Match from './subcomponents/match/Match.vue'

  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        'listMatches' : 'matches/getMatches',
        'phaseSelected' : 'dates/getPhaseSelected'
      })
    },
    components: {
      'match' : Match
    }
  }
</script>
