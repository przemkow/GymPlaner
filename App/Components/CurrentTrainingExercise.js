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

  render () {
    let viewContainerStyles = {
      borderColor: '#A0D831',
      borderBottomWidth: 0,
    }
    viewContainerStyles.borderWidth = this.props.isCurrent ? 3 : 0
    return (
      <View style={{marginTop: 10}}>
        <View style={viewContainerStyles}>
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
                  value={this.props.exercise.weight}
                  onChange={(newValue) => this.props.updateExerciseWeight(this.props.id, newValue)}
                  allowFloats={true}
                />
              </FormGroup>
              <FormGroup styleName="stretch">
                <Caption>Exercise notes:</Caption>
                <TextInput
                  value={this.props.exercise.userNote}
                  onChangeText={(newValue) => this.props.updateExerciseUserNote(this.props.id, newValue)}
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
                key={index}
              >
                {
                  Number.isInteger(setDone)
                    ? <Text>{setDone.toString()}</Text>
                    : <MaterialCommunityIcons name='plus' size={16} />
                }
              </Button>
            ))
          }
        </ViewSH>
        <Divider styleName="line" />
        </View>
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
      dispatch(TrainingInProgressFromRedux.updateFinishedSet({exerciseId, setId})),
    updateExerciseUserNote: (exerciseId, note) =>
      dispatch(TrainingInProgressFromRedux.updateExerciseUserNote({exerciseId, note})),
    updateExerciseWeight: (exerciseId, weight) =>
      dispatch(TrainingInProgressFromRedux.updateExerciseWeight({exerciseId, weight})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrainingExercise)
