import { DrawerNavigator } from 'react-navigation'
import MainTabNavigation from './HomeNavigation/MainTabNavigation'
import TrainingsHistoryNavigation from './TrainingsHistory/TrainingsHistoryNavigation'
// Manifest of possible screens
const HomeNavigation = DrawerNavigator({
  MainTabNavigation: {
    screen: MainTabNavigation,
    navigationOptions: {
      title: 'Home'
    }
  },
  TrainingsHistoryNavigation: {
    screen: TrainingsHistoryNavigation,
    navigationOptions: {
      title: 'Trainings history'
    }
  }
}, {
  initialRouteName: 'MainTabNavigation'
})

export default HomeNavigation
