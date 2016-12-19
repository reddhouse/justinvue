// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.

import axios from 'axios'

export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

export const searchByArtistName = ({ commit }, { name }) => {
  commit('requestSearchResults')
  return axios.get('https://api.spotify.com/v1/search?q=' + name + '&type=artist&limit=10')
    .then(res => {
      commit('receiveSearchResults', {artists: res.data.artists.items})
    })
}

export const setTitle = ({ commit }, { title }) => {
  commit('setTitle', { title })
}

// 726726726726726726726726726726726726726726726726726726726726726726726

export const setField = ({ commit }, payload) => {
  switch (payload.field) {
    case 'TITLE':
      commit('setStateTitle', { text: payload.text })
      break
    case 'DESCRIPTION':
      commit('setStateDescription', { text: payload.text })
      break
  }
}

export const setField2 = ({ commit }, payload) => {
  switch (payload.field) {
    case 'email':
      commit('setStateEmail', { text: payload.text, index: payload.index })
      break
    case 'action':
      commit('setStateAction', { text: payload.text, index: payload.index })
      break
    case 'dueDate':
      commit('setStateDueDate', { text: payload.text, index: payload.index })
      break
    case 'instructions':
      commit('setStateInstructions', { text: payload.text, index: payload.index })
      break
    case 'notify':
      commit('setStateNotify', { text: payload.text, index: payload.index })
      break
    case 'pause':
      commit('setStatePause', { text: payload.text, index: payload.index })
      break
  }
}

export const addBlankForm = ({ commit }, { numSteps }) => {
  let blankForm = {
    'email': '',
    'dueDate': '',
    'action': '',
    'instructions': '',
    'notify': false,
    'pause': false
  }
  commit('addBlankForm', { blankForm, numSteps })
}
