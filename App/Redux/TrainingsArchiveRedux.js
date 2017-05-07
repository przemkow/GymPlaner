import { createReducer, createActions } from 'reduxsauce'
import { append } from 'ramda'
import guid from '../Lib/Guid'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addTraining: ['payload']
})

export const TrainingsArchiveTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = []

/* ------------- Reducers ------------- */

export const addTraining = (state, {payload}) => {
  const finishedTraining = {
    key: {
      id: guid()
    },
    model: payload.trainingInProgress
  }
  return append(finishedTraining, state)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TRAINING]: addTraining,
})
