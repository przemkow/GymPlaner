import { createReducer, createActions } from 'reduxsauce'
import { append, identity, findIndex, update} from 'ramda'
import guid from '../Lib/Guid'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addNewTraining: ['payload'],
  newTraining: null,
  editTraining: ['payload'],
  updateTraining: ['payload']
})

export const TrainingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = []

/* ------------- Reducers ------------- */

// successful api lookup
export const addNewTraining = (state, { payload }) => append({
  key: {
    id: guid()
  },
  model: payload.newTrainingObject
}, state)

export const updateTraining = (state, { payload }) => {
  const elementId = findIndex((training) => training.key.id === payload.trainingObject.key.id, state)
  return update(elementId, payload.trainingObject, state)
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NEW_TRAINING]: addNewTraining,
  [Types.EDIT_TRAINING]: identity,
  [Types.NEW_TRAINING]: identity,
  [Types.UPDATE_TRAINING]: updateTraining
})
