import Request from 'superagent'
import Cookie from 'js-cookie'

// BASEDIR
const BASE = '/mundial/api/v1';

const getCookie = (name) => {
  let cookie = document.cookie.match(new RegExp(name + '=([^;]+)'));
  if (cookie) return cookie[1];
}

// URLS APIS
const URL_FIXTURE = `${BASE}/fixture/`
const URL_MATCHES = (ano, month, day) => `${BASE}/matches/${ano}/${month}/${day}/`
const URL_MATCH = (id) => `${BASE}/match/${id}/score/`

// METHODS
const fetchFixture = () => Request.get(URL_FIXTURE).set('X-CSRFToken', Cookie.get('csrftoken'))
const fetchMatches = data => Request.get(URL_MATCHES(data.ano, data.month, data.day))
const betMatch = (id, data) => Request.post(URL_MATCH(id)).set('X-CSRFToken', Cookie.get('csrftoken')).send(data)

export default {
  fetchFixture,
  fetchMatches,
  betMatch
};
