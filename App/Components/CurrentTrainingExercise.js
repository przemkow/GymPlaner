import React, {PropTypes} from 'react'
import styles from './Styles/CurrentTrainingExerciseStyle'
import { connect } from 'react-redux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'
import { View, Text, Button, Divider, Caption, Row} from '@shoutem/ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Accordion from 'react-native-accordion'
import Timer from './Timer'

export class CurrentTrainingExercise extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    exercise: PropTypes.object,
    isCurrent: PropTypes.bool
  }

  render () {
    return (
      <View style={styles.container}>
        <Divider styleName="section-header">
          <Caption>{this.props.exercise.exerciseName}</Caption>
          <Caption>{this.props.exercise.setsGoal}x{this.props.exercise.setsGoal}x{this.props.exercise.weight}kg</Caption>
        </Divider>
        <View styleName="horizontal flexible">
        {
          this.props.exercise.setsDone.map((setDone, index) => (
            <Button
              styleName="full-width"
              onPress={() => this.props.updateFinishedSet(this.props.id, index)}
            >
              {
                setDone
                  ? <Text>{setDone.toString()}</Text>
                  : <MaterialCommunityIcons name='plus' size={16} />
              }
            </Button>
          ))
        }
        </View>
        <Divider styleName="line" />
        <Timer breakTime={this.props.exercise.breakTime} visible={this.props.isCurrent}/>

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
