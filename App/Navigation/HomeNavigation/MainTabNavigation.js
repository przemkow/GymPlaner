import React from 'react'
import { TabNavigator } from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import CurrentTrainingNavigation from './MainTabNavigation/CurrentTrainingNavigation'
import TrainingsNavigation from './MainTabNavigation/TrainingsNavigation'
import CalendarNavigation from './MainTabNavigation/CalendarNavigation'

// Manifest of possible screens
const MainTabNavigation = TabNavigator({
  CurrentTrainingNavigation: {
    screen: CurrentTrainingNavigation,
    navigationOptions: {
      tabBar: {
        label: 'Current training',
        icon: ({ tintColor }) => (<MaterialCommunityIcons name='camera-timer' size={25} color={tintColor} />)
      }
    }
  },
  TrainingsNavigation: {
    screen: TrainingsNavigation,
    navigationOptions: {
      tabBar: {
        label: 'Trainings',
        icon: ({ tintColor }) => (<MaterialCommunityIcons name='weight-kilogram' size={25} color={tintColor} />)
      }
    }
  },
  CalendarNavigation: {
    screen: CalendarNavigation,
    navigationOptions: {
      tabBar: {
        label: 'Calendar',
        icon: ({ tintColor }) => (<MaterialCommunityIcons name='calendar' size={25} color={tintColor} />)
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63'
  }
})

export default MainTabNavigation
