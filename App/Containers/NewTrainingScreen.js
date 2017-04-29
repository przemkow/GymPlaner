import React, { PropTypes } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'
import { Button, View, Text, TextInput, Caption, FormGroup, Divider} from '@shoutem/ui'

import TrainingFormAction from '../Redux/TrainingFormRedux'
import TrainingsAction from '../Redux/TrainingsRedux'

import NewExercise from '../Components/NewExercise'

// import NewExerciseScreen from 'NewExerciseScreen'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NewTrainingScreenStyle'

class NewTraining extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    trainingForm: PropTypes.object,
    updateTrainingName: PropTypes.func,
    createNewTraining: PropTypes.func
  }

  componentWillMount () {
  }

  render () {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
          <FormGroup styleName="stretch">
            <Caption>New training name:</Caption>
            <TextInput
              onChangeText={this.props.updateTrainingName}
              value={this.props.trainingForm.trainingName}
            />
          </FormGroup>


          {
            this.props.trainingForm.exercises.map((exerciseModel, index) => (
              <NewExercise id={index} exerciseModel={exerciseModel} key={index.toString()}/>
            ))
          }

          <Divider styleName="section-header" />
          <Button
              onPress={this.props.addExercise}>
            <Text>Add next exercise</Text>
          </Button>
          <Divider styleName="line" />
          <Button
            styleName="secondary"
            onPress={() => this.props.createNewTraining(this.props.trainingForm)}>
            <Text>SAVE</Text>
          </Button>
          <Button
            title="Save"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    trainingForm: pathOr({}, ['trainingForm', 'model'], state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTrainingName: (trainingName) => dispatch(TrainingFormAction.updateTrainingName({trainingName})),
    createNewTraining: (newTrainingObject) => dispatch(TrainingsAction.addNewTraining({newTrainingObject})),
    addExercise: () => dispatch(TrainingFormAction.addExercise()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining)
