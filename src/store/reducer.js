// import * as ACTIONS from './actions'

export const initialState = {
  stateprop1: false
}

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        stateprop1: true
      }
    case 'FAILURE':
      return {
        ...state,
        stateprop1: false
      }
    default:
      return state
  }
}
