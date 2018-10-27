const setActive = (state, data) => state.datesPhases[data.index].active = data.status
const setCurrent = (state, data) => {
  state.datesPhases[data.index].current = data.status;
  state.phaseCurrent = state.datesPhases[data.index].name_key;
}
const setSelected = (state, data) => {
  state.datesPhases.forEach(item => item.selected = false)
  state.datesPhases[data.index].selected = data.status
}
const setSelectedDay = (state, data) => {
  state.datesPhases.forEach(item => {
    item.listDates.forEach(date => date.selected = false)
  })
  state.datesPhases[data.index].listDates[data.indexDays].selected = data.status
  state.daySelected = state.datesPhases[data.index].listDates[data.indexDays]
}
const includeFixture = (state, data) => {
  state.datesPhases.forEach(phase => {
    let fixtureDate = null;
    data.forEach(item => {
      if (phase.name_key == item.level.toLowerCase()) {
        fixtureDate = item.dates;
      }
    })
    fixtureDate.forEach(date => {
      let d = date.date_local.split('-')[2],
        m = date.date_local.split('-')[1];
      phase.listDates.forEach(datePhase => {
        if (datePhase.day == d && datePhase.month == m) datePhase.numMatch = date.count
      })
    })
  })
}
const setPhaseCurrent = (state, phase) => state.phaseCurrent = phase;

export default {
  setActive,
  setCurrent,
  setSelected,
  setSelectedDay,
  includeFixture,
  setPhaseCurrent
}
