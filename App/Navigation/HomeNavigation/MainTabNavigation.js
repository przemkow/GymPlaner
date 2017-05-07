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
      tabBarLabel: 'Current training',
      tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name='camera-timer' size={25} color={tintColor} />)
    }
  },
  TrainingsNavigation: {
    screen: TrainingsNavigation,
    navigationOptions: {
      tabBarLabel: 'Trainings',
      tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name='weight-kilogram' size={25} color={tintColor} />)
    }
  },
  CalendarNavigation: {
    screen: CalendarNavigation,
    navigationOptions: {
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name='calendar' size={25} color={tintColor} />)
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63'
  }
})

export default MainTabNavigation
