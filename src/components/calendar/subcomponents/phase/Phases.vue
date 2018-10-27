<template src="./phases.html"></template>
<style src="./phases.css"></style>
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
        'listPhases' : 'dates/getDates',
        'getPhaseCurrent' : 'dates/getPhaseCurrent'
      }),
      valueSelected() {
        return this.getPhaseCurrent
      }
    },
    props: ['datenow', 'phasecurrent'],
    methods: {
      ...mapActions({
          'activate': 'dates/activate',
          'deactivate': 'dates/deactivate',
          'makeCurrent': 'dates/makeCurrent',
          'notCurrent': 'dates/notCurrent',
          'makeSelected' : 'dates/makeSelected',
          'saveDaySelected' : 'dates/selectDay',
          'setPhaseCurrent' : 'dates/setPhaseCurrent'
      }),
      isSelected(phase) {
        return phase.selected ? 'segunfecha' : ''
      },
      openList() {
        this.isOpen = (this.isOpen) ? false : true;
      },
      setPhaseSelected(phase) {
        this.setPhaseCurrent(phase.name_key)
      },
      formatNamePhase(name) {
        switch (name) {
          case 'fase de grupos' : return 'Fase de grupos'
          case 'octavos' : return 'Octavos'
          case 'cuartos' : return 'Cuartos'
          case 'semifinal' : return 'Semi'
          case 'tercer lugar' : return '3er'
          case 'final' : return 'Final'
        }
      },
      formatPhase(name){
        return name.split(' ').join('-');
      },
      classPhase(name) {
        switch (name) {
          case 'fase de grupos' : return 'fg'
          case 'octavos' : return 'oc'
          case 'cuartos' : return 'cu'
          case 'semifinal' : return 'semi'
          case 'tercer lugar' : return 'er'
          case 'final' : return 'fi'
        }
      },
      phasesComplete() {
        let dateNow = this.datenow.getTime()
        this.listPhases.forEach((item, index) => {
          this.isActiveCurrent(
              dateNow,
              item.limitDates.begin,
              (index + 1 < this.listPhases.length) ? this.listPhases[index + 1].limitDates.begin : null,
              index
          )
        })
      },
      setSelectedDay(day, month, listDays, indexPhase) {
        let dayCurrentInactive = false;
        listDays.forEach( (item, index) => {
          if (item.day == day && item.month == month){
            if (item.dayMatch == 'active') {
              this.saveDaySelected({ index: indexPhase, indexDay: index })
            } else {
              listDays.forEach( (el, index) => {
                if (el.dayMatch == 'active') {
                  this.saveDaySelected({ index: indexPhase, indexDay: index })
                }
              })
            }
          }
        })
      },
      isActiveCurrent(dateNow, dateBeginPhase, dateBeginNextPhase, index) {
        let splitDateBPhase = dateBeginPhase.split('/'),
            formatDBPhase = new Date(`2018-${splitDateBPhase[1]}-${splitDateBPhase[0]}`).getTime(),
            splitDateBNextPhase = (dateBeginNextPhase) ? dateBeginNextPhase.split('/') : '',
            formatDBNPhase = (splitDateBNextPhase.length) ? new Date(`2018-${splitDateBNextPhase[1]}-${splitDateBNextPhase[0]}`).getTime() : '',
            phaseGroup = new Date('2018-06-14').getTime();
        if (dateNow >= formatDBPhase) this.activate(index)
        else {
          if (formatDBPhase == phaseGroup) this.activate(index)
        }
        let d = new Date(dateNow),
            day = d.getDate(),
            month = d.getMonth() + 1;
        if (formatDBNPhase != ""){
            if (dateNow >= formatDBPhase && dateNow < formatDBNPhase) {
              this.makeCurrent(index)
              this.makeSelected(index)
              this.setSelectedDay(day, month, this.listPhases[index].listDates, index)
            } else if (dateNow <= formatDBPhase && formatDBPhase == phaseGroup) {
              this.makeCurrent(index)
              this.makeSelected(index)
              this.setSelectedDay('14', '06', this.listPhases[index].listDates, index)
            }
        } else {
          if (dateNow >= formatDBPhase) {
            this.makeCurrent(index)
            this.makeSelected(index)
            this.setSelectedDay(day, month, this.listPhases[index].listDates, index)
          }
        }
      },
      isPhaseSelected(name){
        return (name == this.valueSelected) ? 'selected' : '';
      }
    },
    mounted() {
      this.phasesComplete();
      this.valueSelectedPhase = this.phasecurrent.split(' ').join('-');
    }
  }
</script>
