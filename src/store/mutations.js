// Mutatitions are the only way to actually change the state in a
// vuex store. Each mutation has a string type and a handler.
// They can receieve a second payload argument as well.
// The handler functions receieve state as their first argument.
// Mutation are synchronous transactions. See actions for async operations.

export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}

export const requestSearchResults = (state) => {
  state.isBusy = true
}

export const receiveSearchResults = (state, { artists }) => {
  state.artists = artists
  state.isBusy = false
}

export const setTitle = (state, { title }) => {
  state.qpTitle = title
}

export const setTitle2 = (state, { text }) => {
  state.qpTitle = text
}

// 726726726726726726726726726726726726726726726726726726726726726726726

export const setStateTitle = (state, { text }) => {
  state.stateTitle = text
}
export const setStateDescription = (state, { text }) => {
  state.stateDescription = text
}

export const setStateEmail = (state, { text, index }) => {
  state.stateStepList[index].email = text
}
export const setStateAction = (state, { text, index }) => {
  state.stateStepList[index].action = text
}
export const setStateInstructions = (state, { text, index }) => {
  state.stateStepList[index].instructions = text
}
export const setStateDueDate = (state, { text, index }) => {
  state.stateStepList[index].dueDate = text
}
export const setStateNotify = (state, { text, index }) => {
  state.stateStepList[index].notify = text
}
export const setStatePause = (state, { text, index }) => {
  state.stateStepList[index].pause = text
}

export const addBlankForm = (state, { blankForm, numSteps }) => {
  state.stateStepList.splice(numSteps, 0, blankForm)
}
