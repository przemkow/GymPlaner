import React, {PropTypes} from 'react'
import styles from './Styles/NewExerciseStyle'
import { connect } from 'react-redux'
import TrainingFormAction from '../Redux/TrainingFormRedux'
import { Button, View, Text, TextInput, Caption, FormGroup, Divider } from '@shoutem/ui'
import NumberSelector from './NumberSelector'

export class NewExercise extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    exerciseModel: PropTypes.object
  }

  render () {
    return (
      <View style={styles.container}>
        <Divider styleName="section-header">
          <Caption>EXERCISE INFORMATION:</Caption>
        </Divider>
        <FormGroup styleName="stretch">
          <Caption>Exercise name:</Caption>
          <TextInput
            value={this.props.exerciseModel.exerciseName}
            onChangeText={(newValue) => this.props.updateExerciseName(this.props.id, newValue)}
          />
        </FormGroup>
        <FormGroup styleName="stretch">
          <Caption>Starting weight:</Caption>
          <NumberSelector
            value={this.props.exerciseModel.weight}
            onChange={(newValue) => this.props.updateWeight(this.props.id, newValue)}
            allowFloats={true}
          />
        </FormGroup>
        <FormGroup styleName="stretch">
          <Caption>Break time (in sec):</Caption>
          <NumberSelector
            value={this.props.exerciseModel.breakTime}
            onChange={(newValue) => this.props.updateBreakTime(this.props.id, newValue)}
            allowFloats={false}
          />
        </FormGroup>
        <FormGroup styleName="stretch">
          <Caption>Sets:</Caption>
          <NumberSelector
            value={this.props.exerciseModel.sets}
            onChange={(newValue) => this.props.updateSets(this.props.id, newValue)}
            allowFloats={false}
          />
        </FormGroup>
        <FormGroup styleName="stretch">
          <Caption>Reps:</Caption>
          <NumberSelector
            value={this.props.exerciseModel.reps}
            onChange={(newValue) => this.props.updateReps(this.props.id, newValue)}
            allowFloats={false}
          />
        </FormGroup>
        <Button styleName="secondary" onPress={() => this.props.deleteExercise(this.props.id)}>
          <Text>Delete Exercise</Text>
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateExerciseName: (id, newValue) =>
      dispatch(TrainingFormAction.updateExerciseName({id, newValue})),
    updateBreakTime: (id, newValue) =>
      dispatch(TrainingFormAction.updateBreakTime({id, newValue})),
    updateSets: (id, newValue) =>
      dispatch(TrainingFormAction.updateSets({id, newValue})),
    updateReps: (id, newValue) =>
      dispatch(TrainingFormAction.updateReps({id, newValue})),
    updateWeight: (id, newValue) =>
      dispatch(TrainingFormAction.updateWeight({id, newValue})),
    deleteExercise: (id) =>
      dispatch(TrainingFormAction.deleteExercise({id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewExercise)

// // Prop type warnings
// NewExercise.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// NewExercise.defaultProps = {
//   someSetting: false
// }
