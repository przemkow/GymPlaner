import React, { PropTypes } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import CurrentTrainingExercise from '../Components/CurrentTrainingExercise'
import { View, Text, Button, Divider, Caption, Title, } from '@shoutem/ui'

// Styles
import styles from './Styles/TrainingInProgressStyle'
import { propOr } from 'ramda'

class TrainingInProgress extends React.Component {
  static propTypes = {
    training: PropTypes.object
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Title style={{textAlign: 'center'}}>{this.props.training.trainingName.toUpperCase()}</Title>
        {
          this.props.training.exercises.map((exercise, index) => (
            <CurrentTrainingExercise exercise={exercise} id={index}
              isCurrent={index === this.props.training.currentExercise} key={index.toString()}/>
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
