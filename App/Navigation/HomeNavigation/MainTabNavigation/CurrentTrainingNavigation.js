import React from 'react'
import { StackNavigator } from 'react-navigation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CurrentTraining from '../../../Containers/CurrentTrainingScreen'

// Manifest of possible screens
const CurrentTrainingNavigation = StackNavigator({
  CurrentTrainingScreen: {
    screen: CurrentTraining,
    navigationOptions: {
      title: 'Current training',
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
  initialRouteName: 'CurrentTrainingScreen'
})

export default CurrentTrainingNavigation
