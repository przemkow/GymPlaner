import { DrawerNavigator } from 'react-navigation'
import MainTabNavigation from './HomeNavigation/MainTabNavigation'
import TrainingsHistoryNavigation from './TrainingsHistory/TrainingsHistoryNavigation'
import DrawerContent from '../Components/DrawerContent'
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
  contentComponent: DrawerContent,
  initialRouteName: 'MainTabNavigation'
})

export default HomeNavigation
