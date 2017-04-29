import React, { PropTypes } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import CurrentTrainingExercise from '../Components/CurrentTrainingExercise'

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
        {
          this.props.training.exercises.map((exercise, index) => (
            <CurrentTrainingExercise exercise={exercise} id={index} key={index.toString()}/>
          ))
        }

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
