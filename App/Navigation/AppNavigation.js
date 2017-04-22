import { StackNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import HomeNavigation from './HomeNavigation'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
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
