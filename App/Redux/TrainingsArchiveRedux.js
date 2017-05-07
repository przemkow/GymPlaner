import { createReducer, createActions } from 'reduxsauce'
import { append } from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addTraining: ['payload']
})

export const TrainingsArchiveTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = []

/* ------------- Reducers ------------- */

export const addTraining = (state, {payload}) => append(payload.trainingInProgress, state)

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TRAINING]: addTraining,
})
