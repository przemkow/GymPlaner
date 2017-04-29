import { createReducer, createActions } from 'reduxsauce'
import { assocPath, insert, evolve, adjust, assoc, remove} from 'ramda'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  updateTrainingName: ['payload'],
  updateExerciseName: ['payload'],
  updateBreakTime: ['payload'],
  updateSets: ['payload'],
  updateReps: ['payload'],
  updateWeight: ['payload'],
  addExercise: null,
  deleteExercise: ['payload'],
  clearForm: null
})

export const TrainingFormTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const newExerciseModel = {
  exerciseName: null,
  breakTime: 90,
  weight: 40,
  sets: 5,
  reps: 5
}

export const INITIAL_STATE = {
  key: {
    id: null
  },
  model: {
    trainingName: null,
    exercises: [newExerciseModel]
  },
  identity: 'trainingForm'
}


/* ------------- Reducers ------------- */

// set up data for new training form
export const updateTrainingName = (state, { payload }) => assocPath(['model', 'trainingName'], payload.trainingName, state)
export const addExercise = (state) => {
  const addExerciseEvolve = {
    model: {
      exercises: insert(-1, newExerciseModel)
    }
  }
  return evolve(addExerciseEvolve, state)
}
export const deleteExercise = (state, { payload }) => {
  const deleteExerciseEvolve = {
    model: {
      exercises: remove(payload.id, 1)
    }
  }
  return evolve(deleteExerciseEvolve, state)
}
export const updateExerciseAttribute = (attribute) => (state, { payload }) => {
  const updateExerciseEvolve = {
    model: {
      exercises: adjust(assoc(attribute, payload.newValue), payload.id)
    }
  }
  return evolve(updateExerciseEvolve, state)
}

export const clearForm = () => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_TRAINING_NAME]: updateTrainingName,
  [Types.ADD_EXERCISE]: addExercise,
  [Types.DELETE_EXERCISE]: deleteExercise,
  [Types.UPDATE_EXERCISE_NAME]: updateExerciseAttribute('exerciseName'),
  [Types.UPDATE_BREAK_TIME]: updateExerciseAttribute('breakTime'),
  [Types.UPDATE_SETS]: updateExerciseAttribute('sets'),
  [Types.UPDATE_REPS]: updateExerciseAttribute('reps'),
  [Types.UPDATE_WEIGHT]: updateExerciseAttribute('weight'),
  [Types.CLEAR_FORM]: clearForm
})
