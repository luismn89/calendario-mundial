<template src="./dates.html"></template>
<style src="./dates.css"></style>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      ...mapGetters({
        'listDates' : 'dates/getDates',
        'getDaySelected' : 'dates/getDaySelected',
        'getPhaseCurrent' : 'dates/getPhaseCurrent'
      }),
      valueSelected() {
        return this.getDaySelected
      },
      listDaysCurrent() {
        let datesPhase = [];
        this.listDates.forEach(item => {
          if (item.name_key == this.getPhaseCurrent) {
            datesPhase = item.listDates.filter(item => item.dayMatch != 'inactive');
          }
        })
        return datesPhase;
      },
      listDays() {
        let dates = [];
        this.listDates.forEach(item => {
          let aux = dates.concat(item.listDates)
          dates = aux;
        })
        return dates
      }
    },
    methods: {
      ...mapActions({
        'makeSelected' : 'dates/makeSelected',
        'setSelectedDay' : 'dates/selectDay',
      }),
      openList() {
        this.isOpen = (this.isOpen) ? false : true;
      },
      goDayPhase(el, index) {
        if (el.dayMatch == 'active') {
          this.listDates.forEach((item, indexPhase) => {
            item.listDates.forEach((item, indexDate) => {
              if (item.day == el.day && item.month == el.month) {
                this.setSelectedDay({
                  index: indexPhase,
                  indexDay: indexDate
                })
                this.makeSelected(indexPhase)
              }
            })
          })
        }
      },
      dateItem(item) {
          return `${item.day}${item.month}`
      },
      isSelected(date){
        return (date == this.dateItem(this.valueSelected)) ? 'selected' : '';
      },
      isDayActive(day) {
        return (day.dayMatch == 'inactive') ? 'dayDisabled' : '';
      }
    }
  }
</script>
