import React, { PropTypes } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TrainingInProgressStyle'
import { pipe, propOr, find} from 'ramda'

class TrainingInProgress extends React.Component {
  static propTypes = {
    training: PropTypes.object
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.training.trainingName}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const trainingId = ownProps.navigation.state.params.trainingId
  return {
    training: pipe(
      propOr([], 'trainings'),
      find((training) => (training.key.id === trainingId)),
      propOr({}, 'model')
    )(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingInProgress)
