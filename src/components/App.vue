<template src="./app.html"></template>
<style src="./app.css"></style>
<script>
import Calendar from './calendar/Calendar.vue'
import ListMatch from './list-match/ListMatch.vue'

export default {
  data () {
    return {}
  },
  components: {
    'calendar' : Calendar,
    'list-match' : ListMatch
  }
}
</script>
