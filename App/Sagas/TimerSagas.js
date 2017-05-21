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

import { call, put, take, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import TimerActions, { TimerTypes } from '../Redux/TimerRedux'
import BackgroundTimer from 'react-native-background-timer';

export function * timerTick (api, action) {
  while (true) {
    const winner = yield race({
      stopped: take(TimerTypes.STOP),
      tick: call(delay, 1000)
    })

    if (!winner.stopped) {
      yield put(TimerActions.tick())
    } else {
      break
    }
  }
}
