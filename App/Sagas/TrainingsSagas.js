/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, select } from 'redux-saga/effects'
import TrainingsActions from '../Redux/TrainingsRedux'
import { NavigationActions } from 'react-navigation'
import TrainingFormActions from '../Redux/TrainingFormRedux'
import { pipe, propOr, find } from 'ramda'

export function * clearFormAndGoBack (action) {
  yield put(NavigationActions.back())
  yield put(TrainingFormActions.clearForm())
}

export function * editTraining ({payload}) {
  const state = yield select()
  const trainingToEdit = pipe(
    propOr([], 'trainings'),
    find((training) => (training.key.id === payload.trainingUUID)),
  )(state)
  yield put(TrainingFormActions.setForm({trainingToEdit}))
  yield put(NavigationActions.navigate({routeName: 'EditTrainingScreen'}))
}

export function * newTraining () {
  yield put(TrainingFormActions.clearForm())
  yield put(NavigationActions.navigate({routeName: 'NewTrainingScreen'}))
}
