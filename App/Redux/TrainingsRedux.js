import { createReducer, createActions } from 'reduxsauce'
import { append, last, propOr} from 'ramda'
import guid from '../Lib/Guid'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addNewTraining: ['payload']
})

export const TrainingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = [{
  key: {
    id: guid()
  },
  model: {
    trainingName: 'Test Training',
    exercises: [
      {
        exerciseName: 'Test Exercise',
        breakTime: 90,
        sets: 5,
        reps: 5
      }
    ]
  }
}]

/* ------------- Reducers ------------- */

// successful api lookup
export const addNewTraining = (state, { payload }) => append({
  key: {
    id: guid()
  },
  model: payload.newTrainingObject
}, state)

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_NEW_TRAINING]: addNewTraining
})
