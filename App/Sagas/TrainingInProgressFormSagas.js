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
import { NavigationActions } from 'react-navigation'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'
import { pipe, propOr, find } from 'ramda'

export function * startNewTraining ({payload}) {
  const state = yield select()
  const selectedTraining = pipe(
    propOr([], 'trainings'),
    find((training) => (training.key.id === payload.trainingId)),
  )(state)
  yield put(TrainingInProgressFromRedux.prepareTrainingForm({selectedTraining}))
  yield put(NavigationActions.navigate({routeName: 'TrainingInProgressScreen'}))
}
