import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import AppNavigator from '../Navigation/AppNavigation'

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState || state)
};

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer,
    login: require('./LoginRedux').reducer,
    trainingForm: require('./TrainingFormRedux').reducer,
    trainings: require('./TrainingsRedux').reducer,
    trainingInProgressForm: require('./TrainingInProgressFromRedux').reducer,
    timer: require('./TimerRedux').reducer,
    trainingsArchive: require('./TrainingsArchiveRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
