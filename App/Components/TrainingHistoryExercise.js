import React, {PropTypes} from 'react'
import styles, { shoutemOverwrite } from './Styles/CurrentTrainingExerciseStyle'
import { View, Animated, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'
import { View as ViewSH, Text, TextInput, Button, Divider, Caption, Row, FormGroup} from '@shoutem/ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export class CurrentTrainingExercise extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    exercise: PropTypes.object,
  }

  componentWillMount () {
    this.borderWidth = new Animated.Value(0);
  }

  constructor(props) {
    super(props);
    this.state = {
      notesVisible: false
    }
  }

  render () {
    return (
      <View>
        <Divider styleName="section-header">
          <View>
            <Caption>{this.props.exercise.exerciseName}</Caption>
            <Caption>
              {this.props.exercise.setsGoal}x{this.props.exercise.setsGoal}x{this.props.exercise.weight}kg
            </Caption>
          </View>
          <TouchableOpacity
            onPress={() => this.setState({notesVisible: !this.state.notesVisible})}
          >
            {
              this.state.notesVisible ?
                <MaterialCommunityIcons style={{color: '#666666', marginRight: 6, paddingTop: 4 }}
                  name='arrow-up-drop-circle' size={24} /> :
                <MaterialCommunityIcons style={{color: '#666666', marginRight: 6, paddingTop: 4 }}
                  name='arrow-down-drop-circle-outline' size={24} />
            }

          </TouchableOpacity>
        </Divider>
        { this.state.notesVisible ?
          <View style={{backgroundColor: "#FFFFFF", padding: 15}}>
            <Caption>Exercise notes:</Caption>
            <Text>
              {this.props.exercise.userNote || "Ops... It seems haven't left any note for this exercise"}
            </Text>
          </View> :
          null
        }
        <ViewSH styleName="horizontal">
        {
          this.props.exercise.setsDone.map((setDone, index) => (
            <Button
              styleName="full-width"
              key={index}
            >
              {
                //TODO move styles to the other file
                Number.isInteger(setDone)
                  ? (<Text style={this.props.exercise.repsGoal > setDone ? {color: "#e73536"} : null }>
                      {setDone.toString()}
                    </Text>)
                  : <Text style={{color: "#e73536"}}>?</Text>
              }
            </Button>
          ))
        }
        </ViewSH>
        <Divider styleName="line" />
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
