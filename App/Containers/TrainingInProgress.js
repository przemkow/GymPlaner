import React, { PropTypes } from 'react'
import { Button, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'

// Styles
import styles from './Styles/TrainingInProgressStyle'
import { propOr } from 'ramda'

class TrainingInProgress extends React.Component {
  static propTypes = {
    training: PropTypes.object
  }

  render () {
    console.log(this.props.training)
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.training.trainingName}</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    training: propOr({}, 'trainingInProgressForm', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingInProgress)
