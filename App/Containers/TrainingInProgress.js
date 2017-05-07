import React, { PropTypes } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import CurrentTrainingExercise from '../Components/CurrentTrainingExercise'
import { FormGroup, TextInput, Text, Button, Divider, Caption, Title, } from '@shoutem/ui'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'

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
        <Divider/>
        <FormGroup styleName="stretch">
          <Caption>General training notes:</Caption>
          <TextInput
            value={this.props.training.userNote}
            onChangeText={(newValue) => this.props.updateTrainingUserNote(newValue)}
          />
        </FormGroup>
        <Button
          styleName="secondary"
          onPress={() => this.props.saveTraining()}
        >
          <Text>SAVE TRAINING</Text>
        </Button>
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
    updateTrainingUserNote: (note) =>
      dispatch(TrainingInProgressFromRedux.updateTrainingUserNote({note})),
    saveTraining: () => dispatch(TrainingInProgressFromRedux.saveTraining())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingInProgress)
