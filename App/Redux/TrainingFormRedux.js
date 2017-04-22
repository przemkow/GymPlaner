import { createReducer, createActions } from 'reduxsauce'
import { assocPath } from 'ramda'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createNewTraining: null,
  updateTrainingName: ['trainingName']
})

export const TrainingFormTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  key: {
    id: null
  },
  model: {
    isNewTraining: null,
    trainingName: null,
    exercises: []
  },
  identity: 'trainingForm'
}

/* ------------- Reducers ------------- */

// set up data for new training form
export const createNewTraining = (state) => assocPath(['model', 'isNewTraining'], true, state)
export const updateTrainingName = (state, { trainingName }) => assocPath(['model', 'trainingName'], trainingName, state)

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_NEW_TRAINING]: createNewTraining,
  [Types.UPDATE_TRAINING_NAME]: updateTrainingName
})
