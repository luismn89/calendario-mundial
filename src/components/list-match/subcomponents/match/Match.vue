<template src="./match.html"></template>
<style src="./match.css"></style>
<script>
    import Stadistic from './subcomponent/stadistic/Stadistic.vue'
    export default {
      data(){
        return {
          activeStadistic: false
        }
      },
      components: {
        'stadistic': Stadistic
      },
      props: ['item'],
      computed: {
        dateFormat() {
          let date = new Date(this.item.start_date_local),
              day = date.getDate(),
              month = (date.getMonth() + 1 == 6) ? 'JUN' : 'JUL';
          return `${day} de ${month}.2018`
        },
        hoursMatch() {
          let date = new Date(this.item.start_date_local),
              hour = (date.getHours() < 10) ? `0${date.getHours()}` : date.getHours(),
              minute = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
          return `${hour}:${minute}`;
        }
      },
      methods: {
        hookId(type) {
          return type == 'id' ? `accordion-${this.item.id}` : `#accordion-${this.item.id}`
        },
        slideDown() {
          if (this.item.incidents_local) {
            if (this.activeStadistic) this.activeStadistic = false;
            else this.activeStadistic = true;
          }
        }
      }
    }
</script>
