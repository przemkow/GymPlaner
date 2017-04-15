import React from 'react'
import { StackNavigator } from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TrainingsList from '../../../Containers/TrainingsListScreen'

// Manifest of possible screens
const TrainingsNavigation = StackNavigator({
  TrainingsListScreen: {
    screen: TrainingsList,
    navigationOptions: {
      title: 'Trainings',
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
  }
}, {
  initialRouteName: 'TrainingsListScreen'
})

export default TrainingsNavigation
