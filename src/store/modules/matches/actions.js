import API from '../../../service/api'

const getMatches = (context, date) => {
  API.fetchMatches(date)
    .then(response => {
      context.commit('clearMatchesList')
      context.commit('setMatches', response.body)
    })
    .catch(error => {
      console.log(error)
    })
}
const setBetMatch = (context, data) => {
  API.betMatch(data.id, data.databet)
    .then(response => {
      console.log('response:', response)
      context.dispatch('modal/showDialog', { type: 'success', message: 'Su resultado fue registrado exitosamente.' }, { root: true })
    })
    .catch(error => {
      console.log('error:', error)
      // context.dispatch('modal/showDialog', { type: 'error', message: `${error}.` }, { root: true })
    })
}
export default {
  getMatches,
  setBetMatch
}

