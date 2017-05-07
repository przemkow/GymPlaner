import { createReducer, createActions } from 'reduxsauce'
import { adjust, evolve, clone, always, assoc, add, identity } from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startNewTraining: ['payload'],
  prepareTrainingForm: ['payload'],
  clearForm: null,
  updateFinishedSet: ['payload'],
  updateExerciseUserNote: ['payload'],
  updateExerciseWeight: ['payload'],
  updateTrainingUserNote: ['payload'],
  nextExercise: null,
})

export const TrainingInProgressFromTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {}

/* ------------- Reducers ------------- */

export const prepareTrainingForm = (state, { payload }) => {
  return ({
    trainingId: payload.selectedTraining.key.id,
    date: Date.now(),
    trainingName: payload.selectedTraining.model.trainingName,
    currentExercise: 0,
    exercises: payload.selectedTraining.model.exercises.map(modelExercise => ({
      exerciseName: modelExercise.exerciseName,
      breakTime: modelExercise.breakTime,
      repsGoal: modelExercise.reps,
      setsGoal: modelExercise.sets,
      setsDone: Array(modelExercise.sets).fill(null),
      weight: modelExercise.weight,
      userNote: null
    })),
    userNote: null
  })
}

export const updateFinishedSet = (state, { payload }) => {
  const { exerciseId, setId } = payload;

  const updateExercise = (exercise) => {
    const updatedExercise = clone(exercise)

    const newRepValue = (number) => {
      if (number === null) {
        return exercise.repsGoal
      } else if (number === 0) {
        return null
      } else {
        return number - 1;
      }
    }

    updatedExercise.setsDone[setId] = newRepValue(exercise.setsDone[setId])
    return updatedExercise
  }
  const finishRepEvolve = {
    exercises: adjust(updateExercise, exerciseId),
    currentExercise: always(exerciseId)
  }
  return evolve(finishRepEvolve, state)
}

export const clearForm = () => INITIAL_STATE

export const updateExerciseUserNote = (state, { payload }) => {
  const { exerciseId, note } = payload;
  const updateUserNote = assoc('userNote', note)
  const updateUserNoteEvolve = {
    exercises: adjust(updateUserNote, exerciseId)
  }
  return evolve(updateUserNoteEvolve, state)
}

export const updateExerciseWeight = (state, { payload }) => {
  const { exerciseId, weight } = payload;
  const updateWeight = assoc('weight', weight)
  const updateExerciseWeightEvolve = {
    exercises: adjust(updateWeight, exerciseId)
  }
  return evolve(updateExerciseWeightEvolve, state)
}

export const updateTrainingUserNote = (state, { payload }) => {
  const { note } = payload;
  const updateUserNoteEvolve = {
    userNote: always(note)
  }
  return evolve(updateUserNoteEvolve, state)
}

export const nextExercise = state => {
  const nextExerciseEvolve = {
    currentExercise: state.currentExercise < state.exercises.length ? add(1) : identity
  }
  return evolve(nextExerciseEvolve, state)
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.PREPARE_TRAINING_FORM]: prepareTrainingForm,
  [Types.CLEAR_FORM]: clearForm,
  [Types.START_NEW_TRAINING]: clearForm,
  [Types.UPDATE_FINISHED_SET]: updateFinishedSet,
  [Types.UPDATE_EXERCISE_USER_NOTE]: updateExerciseUserNote,
  [Types.UPDATE_EXERCISE_WEIGHT]: updateExerciseWeight,
  [Types.UPDATE_TRAINING_USER_NOTE]: updateTrainingUserNote,
  [Types.NEXT_EXERCISE]: nextExercise,
})
