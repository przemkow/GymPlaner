import React from 'react'
import { StackNavigator } from 'react-navigation'
import TrainingsHistory from '../../Containers/TrainingsHistoryScreen'
import TrainingHistory from '../../Containers/TrainingHistoryScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// Manifest of possible screens
const TrainingsHistoryNavigation = StackNavigator({
  TrainingsHistory: {
    screen: TrainingsHistory,
    navigationOptions: {
      title: 'Your trainings',
      header: (navigation) => ({
        left: (
          <MaterialCommunityIcons.Button
            name='menu'
            color='#000000' backgroundColor='transparent'
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        )
      })
    }
  },
  TrainingHistory: {
    screen: TrainingHistory,
    navigationOptions: {
      title: 'Training'
    }
  }
}, {
  initialRouteName: 'TrainingsHistory'
})

export default TrainingsHistoryNavigation
