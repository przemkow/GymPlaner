import React from 'react'
import { StackNavigator } from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CurrentTraining from '../../../Containers/CurrentTrainingScreen'
import TrainingInProgress from '../../../Containers/TrainingInProgress'

// Manifest of possible screens
const CurrentTrainingNavigation = StackNavigator({
  CurrentTrainingScreen: {
    screen: CurrentTraining,
    navigationOptions: ({navigation}) => ({
      title: 'Current training',
      headerLeft: (
        <MaterialCommunityIcons.Button
          name='menu'
          color='#000000' backgroundColor='transparent'
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      )
    })
  },
  TrainingInProgressScreen: {
    screen: TrainingInProgress,
    navigationOptions: {
      title: 'Training in progress'
    }
  }
}, {
  initialRouteName: 'CurrentTrainingScreen'
})

export default CurrentTrainingNavigation
