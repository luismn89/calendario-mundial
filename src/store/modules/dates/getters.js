const getDates = state => state.datesPhases;
const getPhaseCurrent = state => state.phaseCurrent;
const getDaySelected = state => state.daySelected;
const getPhaseSelected = state => {
  let phaseSelec = '';
  state.datesPhases.forEach(el => {
    if (el.selected) {
      phaseSelec = el.name_key
    }
  })
  return phaseSelec
}

export default {
  getDates,
  getPhaseCurrent,
  getDaySelected,
  getPhaseSelected
}
 