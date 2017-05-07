import React from 'react'
import { StackNavigator } from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TrainingsList from '../../../Containers/TrainingsListScreen'
import NewTraining from '../../../Containers/NewTrainingScreen'
import EditTraining from '../../../Containers/EditTrainingScreen'

// Manifest of possible screens
const TrainingsNavigation = StackNavigator({
  TrainingsListScreen: {
    screen: TrainingsList,
    navigationOptions: ({navigation}) => ({
      title: 'Trainings',
      headerLeft: (
        <MaterialCommunityIcons.Button
          name='menu'
          color='#000000' backgroundColor='transparent'
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      )
    })
  },
  NewTrainingScreen: {
    screen: NewTraining,
    navigationOptions: {
      title: 'New training'
    }
  },
  EditTrainingScreen: {
    screen: EditTraining,
    navigationOptions: {
      title: 'Edit training'
    }
  }
}, {
  initialRouteName: 'TrainingsListScreen'
})

export default TrainingsNavigation
