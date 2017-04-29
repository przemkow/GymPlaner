import React, {PropTypes} from 'react'
import { View, Text, Button } from 'react-native'
import styles from './Styles/CurrentTrainingExerciseStyle'
import { connect } from 'react-redux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'

export class CurrentTrainingExercise extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    exercise: PropTypes.object
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.props.exercise.exerciseName}</Text>
        <Text>{this.props.exercise.setsGoal}x{this.props.exercise.setsGoal}x{this.props.exercise.weight}kg</Text>
        {
          this.props.exercise.setsDone.map((setDone, index) => (
            <Button
              onPress={() => this.props.updateFinishedSet(this.props.id, index)}
              title={setDone ? setDone.toString() : '?'}
            />
          ))
        }
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
    updateFinishedSet: (exerciseId, setId) =>
      dispatch(TrainingInProgressFromRedux.updateFinishedSet({exerciseId, setId}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrainingExercise)
// // Prop type warnings
// CurrentTrainingExercise.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// CurrentTrainingExercise.defaultProps = {
//   someSetting: false
// }
