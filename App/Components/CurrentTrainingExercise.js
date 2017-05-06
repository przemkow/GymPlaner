import React, {PropTypes} from 'react'
import styles, { shoutemOverwrite } from './Styles/CurrentTrainingExerciseStyle'
import { View, Animated, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'
import { View as ViewSH, Text, TextInput, Button, Divider, Caption, Row, FormGroup} from '@shoutem/ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Accordion from 'react-native-accordion'
import Timer from './Timer'
import NumberSelector from './NumberSelector'

export class CurrentTrainingExercise extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    exercise: PropTypes.object,
    isCurrent: PropTypes.bool
  }

  componentWillMount () {
    this.borderWidth = new Animated.Value(0);
  }

  constructor(props) {
    super(props);
    this.state = {
      editVisible: false
    }
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
            <View>
              <Caption>{this.props.exercise.exerciseName}</Caption>
              <Caption>
                {this.props.exercise.setsGoal}x{this.props.exercise.setsGoal}x{this.props.exercise.weight}kg
              </Caption>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({editVisible: !this.state.editVisible})}
            >
              {
                this.state.editVisible ?
                  <MaterialCommunityIcons style={{color: '#666666', marginRight: 6, paddingTop: 4 }}
                    name='arrow-up-drop-circle' size={24} /> :
                  <MaterialCommunityIcons style={{color: '#666666', marginRight: 6, paddingTop: 4 }}
                    name='arrow-down-drop-circle-outline' size={24} />
              }

            </TouchableOpacity>
          </Divider>
          { this.state.editVisible ?
            <ViewSH>
              <FormGroup styleName="stretch">
                <Caption>Update weight</Caption>
                <NumberSelector
                  // value={this.props.exerciseModel.breakTime}
                  // onChange={(newValue) => this.props.updateBreakTime(this.props.id, newValue)}
                  // allowFloats={false}
                />
              </FormGroup>
              <FormGroup styleName="stretch">
                <Caption>Exercise notes:</Caption>
                <TextInput
                  // onChangeText={this.props.updateTrainingName}
                  // value={this.props.trainingForm.trainingName}
                />
              </FormGroup>
              <Divider styleName="line" />
            </ViewSH> :
            null
          }
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
