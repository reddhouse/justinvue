// Instead of mutating the state, actions commit mutations.
// We can pass a second argument to store.commit which is the "payload"
// for the mutation. Payloads are typically objects.

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
