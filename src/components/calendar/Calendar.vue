<template src="./calendar.html"></template>
<style src="./calendar.css"></style>
<script>
  import Dates from './subcomponents/dates/Dates.vue'
  import Phases from './subcomponents/phase/Phases.vue'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        currentDate: ''
      }
    },
    computed: {
      ...mapGetters({
        'phasecurrent' : 'dates/getPhaseCurrent'
      })
    },
    components: {
      'dates' : Dates,
      'phases' : Phases
    },
    methods: {
      ...mapActions({
        'getFixture' : 'dates/getFixture'
      })
    },
    created() {
        this.getFixture()
        this.currentDate = new Date()
    }
  }
</script>
  