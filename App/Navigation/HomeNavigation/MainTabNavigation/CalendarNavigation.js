import React from 'react'
import { StackNavigator } from 'react-navigation'
import Calendar from '../../../Containers/CalendarScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Manifest of possible screens
const CalendarNavigation = StackNavigator({
  CalendarScreen: {
    screen: Calendar,
    navigationOptions: ({navigation}) => ({
      title: 'Calendar',
      headerLeft: (
        <MaterialCommunityIcons.Button
          name='menu'
          color='#000000' backgroundColor='transparent'
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      )
    })
  }
}, {
  initialRouteName: 'CalendarScreen'
})

export default CalendarNavigation
