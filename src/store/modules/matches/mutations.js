const setMatches = (state, data) => state.matches = data;
const clearMatchesList = state => state.matches = [];

export default {
  setMatches,
  clearMatchesList
}
