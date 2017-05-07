import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { View, Text } from '@shoutem/ui'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TrainingHistoryScreenStyle'
import { pipe, prop, find } from 'ramda'

class TrainingHistoryScreen extends React.Component {
  static propTypes = {
    training: PropTypes.object
  }

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    const {state} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>{this.props.training.trainingName}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, componentProps) => {
  return {
    training: pipe(
      prop('trainingsArchive'),
      find((training) => training.key.id === componentProps.navigation.state.params.trainingId),
      prop('model')
    )(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingHistoryScreen)
