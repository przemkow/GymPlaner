import React, { PropTypes } from 'react'
import styles from './Styles/TrainingFormStyle'
import { connect } from 'react-redux'
import { Button, View, Text, TextInput, Caption, FormGroup, Divider} from '@shoutem/ui'
import { pathOr } from 'ramda'
import TrainingFormAction from '../Redux/TrainingFormRedux'
import NewExercise from './NewExercise'

export class TrainingForm extends React.Component {

  static propTypes = {
    trainingForm: PropTypes.object,
    updateTrainingName: PropTypes.func,
    onSave: PropTypes.func
  }

  render () {
    return (
      <View style={styles.container}>
        <FormGroup styleName="stretch">
          <Caption>Training name:</Caption>
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
          onPress={this.props.onSave}>
          <Text>SAVE</Text>
        </Button>
      </View>
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
    addExercise: () => dispatch(TrainingFormAction.addExercise()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingForm)
