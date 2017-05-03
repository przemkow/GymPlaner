import React, {PropTypes} from 'react'
import styles, { shoutemOverwrite } from './Styles/CurrentTrainingExerciseStyle'
import { View, Animated } from 'react-native'
import { connect } from 'react-redux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'
import { View as ViewSH, Text, Button, Divider, Caption, Row} from '@shoutem/ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Accordion from 'react-native-accordion'
import Timer from './Timer'

export class CurrentTrainingExercise extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    exercise: PropTypes.object,
    isCurrent: PropTypes.bool
  }

  componentWillMount () {
    this.borderWidth = new Animated.Value(0);
  }

  animationsHandler () {
    if (this.props.isCurrent) {
      Animated.timing(this.borderWidth, {
        toValue: 3,
        duration: 500
      }).start()
    } else {
      Animated.timing(this.borderWidth, {
        toValue: 0,
        duration: 500
      }).start()
    }
  }

  render () {
    this.animationsHandler()
    let viewContainerStyles = {
      borderColor: '#A0D831',
      borderBottomWidth: 0,
    }
    viewContainerStyles.borderWidth = this.borderWidth
    return (
      <View style={{marginTop: 10}}>
        <Animated.View style={viewContainerStyles}>
          <Divider styleName="section-header">
            <Caption>{this.props.exercise.exerciseName}</Caption>
            <Caption>{this.props.exercise.setsGoal}x{this.props.exercise.setsGoal}x{this.props.exercise.weight}kg</Caption>
          </Divider>
          <ViewSH styleName="horizontal flexible">
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
        </ViewSH>
        <Divider styleName="line" />
        </Animated.View>
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
