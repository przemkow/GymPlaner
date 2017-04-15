import { DrawerNavigator } from 'react-navigation'
import MainTabNavigation from './HomeNavigation/MainTabNavigation'

// Manifest of possible screens
const HomeNavigation = DrawerNavigator({
  MainTabNavigation: {
    screen: MainTabNavigation,
    navigationOptions: {
      title: 'Home'
    }
  }
}, {
  initialRouteName: 'MainTabNavigation'
})

export default HomeNavigation
