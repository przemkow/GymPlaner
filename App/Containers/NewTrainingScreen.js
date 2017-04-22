import React, { PropTypes } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import TrainingFormAction from '../Redux/TrainingFormRedux'
import { pathOr, propOr} from 'ramda'

// import NewExerciseScreen from 'NewExerciseScreen'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NewTrainingScreenStyle'

class NewTraining extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    createNewTraining: PropTypes.func,
    trainingForm: PropTypes.object
  }

  componentWillMount () {
    this.props.createNewTraining()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>New training name</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.props.updateTrainingName}
            value={this.props.trainingForm.trainingName}
          />
          <Button
            onPress={() => console.log('add next exercise')}
            title="add next exercise"
          />
          <Button
            onPress={() => console.log('Save')}
            title="Save"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    trainingForm: pathOr(['trainingForm', 'model'], {}, state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTraining: () => dispatch(TrainingFormAction.createNewTraining()),
    updateTrainingName: (trainingName) => dispatch(TrainingFormAction.updateTrainingName({trainingName}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining)
