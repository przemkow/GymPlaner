import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { TrainingsTypes } from '../Redux/TrainingsRedux'
import { TrainingInProgressFromTypes } from '../Redux/TrainingInProgressFromRedux'
import { TimerTypes } from '../Redux/TimerRedux'
/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { clearFormAndGoBack, editTraining, newTraining} from './TrainingsSagas'
import { startNewTraining, updateFinishedSet, saveTraining} from './TrainingInProgressFormSagas'
import { timerTick } from './TimerSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(TrainingsTypes.ADD_NEW_TRAINING, clearFormAndGoBack),
    takeLatest(TrainingsTypes.UPDATE_TRAINING, clearFormAndGoBack),
    takeLatest(TrainingsTypes.EDIT_TRAINING, editTraining),
    takeLatest(TrainingsTypes.NEW_TRAINING, newTraining),
    takeLatest(TrainingInProgressFromTypes.START_NEW_TRAINING, startNewTraining),
    takeLatest(TrainingInProgressFromTypes.UPDATE_FINISHED_SET, updateFinishedSet),
    takeLatest(TrainingInProgressFromTypes.SAVE_TRAINING, saveTraining),
    takeLatest(TimerTypes.START, timerTick)
  ]
}
