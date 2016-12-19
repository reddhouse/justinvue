// Getters are like computed properties for stores
// They receive the state as their first argument

export const count = state => state.count

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}

export const artists = state => state.artists
export const isBusy = state => state.isBusy

export const qpTitle = state => state.qpTitle

// 726726726726726726726726726726726726726726726726726726726726726726726

export const stateTitle = state => state.stateTitle
export const stateDescription = state => state.stateDescription
export const stateEmail = state => state.stateEmail
export const stateAction = state => state.stateAction
export const stateInstructions = state => state.stateInstructions
export const stateDueDate = state => state.stateDueDate

export const stateStepList = state => state.stateStepList
