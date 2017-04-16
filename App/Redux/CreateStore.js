import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import devTools from 'remote-redux-devtools'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  // if (ReduxPersist.active) {
  //   enhancers.push(autoRehydrate())
  // }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  enhancers.push(devTools({
    name: 'GymPlaner',
    realtime: true,
    port: 8000
  }))
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  // if (ReduxPersist.active) {
  //   RehydrationServices.updateReducers(store)
  // }

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
