import React, { PropTypes } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

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
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
          <Text>New training name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.props.updateTrainingName}
            value={this.props.trainingForm.trainingName}
          />
          {
            this.props.trainingForm.exercises.map((exerciseModel, index) => (
              <NewExercise id={index} exerciseModel={exerciseModel} key={index.toString()}/>
            ))
          }
          <Button
            onPress={this.props.addExercise}
            title="add next exercise"
          />
          <Button
            onPress={() => this.props.createNewTraining(this.props.trainingForm)}
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
