import { createReducer, createActions } from 'reduxsauce'
import { assoc, evolve, add } from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  start: null,
  stop: null,
  reset: null,
  tick: null,
})

export const TimerTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  isCounting: false,
  currentTime: 0,
}

/* ------------- Reducers ------------- */

// request the data from an api
export const start = state => assoc('isCounting', true, state)
export const stop = state => assoc('isCounting', false, state)
export const reset = state => assoc('currentTime', 0, state)
export const tick = state => {
  const tickEvolve = {
    currentTime: add(1)
  }
  return evolve(tickEvolve, state)
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START]: start,
  [Types.STOP]: stop,
  [Types.RESET]: reset,
  [Types.TICK]: tick,
})
