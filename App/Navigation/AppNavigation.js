import { StackNavigator } from 'react-navigation'
import NewExerciseScreen from '../Containers/NewExerciseScreen'
import NewTrainingScreen from '../Containers/NewTrainingScreen'
import LoginScreen from '../Containers/LoginScreen'
import HomeNavigation from './HomeNavigation'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  NewExerciseScreen: { screen: NewExerciseScreen },
  NewTrainingScreen: { screen: NewTrainingScreen },
  LoginScreen: {
    screen: LoginScreen
  },
  HomeNavigation: {
    screen: HomeNavigation
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeNavigation'

})

export default PrimaryNav
