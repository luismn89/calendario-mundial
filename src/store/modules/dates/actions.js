import API from '../../../service/api'

const activate = (context, index) => context.commit('setActive', {
  index: index,
  status: true
})
const deactivate = (context, index) => context.commit('setActive', {
  index: index,
  status: false
})
const makeCurrent = (context, index) => context.commit('setCurrent', {
  index: index,
  status: true
})
const notCurrent = (context, index) => context.commit('setCurrent', {
  index: index,
  status: false
})
const makeSelected = (context, index) => context.commit('setSelected', {
  index: index,
  status: true
})
const deselected = (context, index) => context.commit('setSelected', {
  index: index,
  status: false
})
const selectDay = (context, data) => {
  context.commit('setSelectedDay', {
    index: data.index,
    indexDays: data.indexDay,
    status: true
  })
  let phaseDay = context.state.datesPhases[data.index].listDates[data.indexDay]
  context.dispatch('matches/getMatches', { day: phaseDay.day,  month: phaseDay.month,  ano: '2018' }, { root: true });
}
const getFixture = (context, data) => {
  API.fetchFixture()
    .then(response => {
      context.commit('includeFixture', response.body)
    })
    .catch(error => {
      console.log(error)
    })
}
const setPhaseCurrent = (context, phase) => context.commit('setPhaseCurrent', phase)

export default {
  activate,
  deactivate,
  makeCurrent,
  notCurrent,
  makeSelected,
  deselected,
  selectDay,
  getFixture,
  setPhaseCurrent
}

