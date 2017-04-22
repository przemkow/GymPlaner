import React, {PropTypes} from 'react'
import { View, Text, TextInput, Button} from 'react-native'
import styles from './Styles/NewExerciseStyle'
import { connect } from 'react-redux'
import TrainingFormAction from '../Redux/TrainingFormRedux'

export class NewExercise extends React.Component {

  static propTypes = {
    id: PropTypes.number,
    exerciseModel: PropTypes.object
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Exercise name:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newValue) => this.props.updateExerciseName(this.props.id, newValue)}
          value={this.props.exerciseModel.exerciseName}
        />
        <Text>Break time (in sec):</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newValue) => this.props.updateBreakTime(this.props.id, parseInt(newValue))}
          value={this.props.exerciseModel.breakTime.toString()}
        />
        <Text>Sets:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newValue) => this.props.updateSets(this.props.id, parseInt(newValue))}
          value={this.props.exerciseModel.sets.toString()}
        />
        <Text>reps:</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(newValue) => this.props.updateReps(this.props.id, parseInt(newValue))}
          value={this.props.exerciseModel.reps.toString()}
        />
        <Button
          onPress={() => this.props.deleteExercise(this.props.id)}
          title="Delete Exercise"
        />
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
