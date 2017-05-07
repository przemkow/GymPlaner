import { StackNavigator } from 'react-navigation'
import TrainingHistoryScreen from '../Containers/TrainingHistoryScreen'
import TrainingsHistory from '../Containers/TrainingsHistoryScreen'
import LoginScreen from '../Containers/LoginScreen'
import HomeNavigation from './HomeNavigation'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TrainingHistoryScreen: { screen: TrainingHistoryScreen },
  TrainingsHistory: { screen: TrainingsHistory },
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
