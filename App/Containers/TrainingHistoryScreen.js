import React, { PropTypes } from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Screen, View as ViewSH, Caption, Tile, Heading, Text } from '@shoutem/ui'
import moment from 'moment'
import TrainingHistoryExercise from '../Components/TrainingHistoryExercise'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TrainingHistoryScreenStyle'
import { pipe, prop, find } from 'ramda'

class TrainingHistoryScreen extends React.Component {
  static propTypes = {
    training: PropTypes.object
  }

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  //TODO move styles to the other file
  render () {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <Tile styleName="text-centric">
            <Heading styleName="md-gutter-top">{this.props.training.trainingName}</Heading>
            <Caption>{moment(this.props.training.date).fromNow()}</Caption>
          </Tile>
        </View>
        <View style={{flex: 4}}>
          <View style={{backgroundColor: "#FFFFFF", padding: 15}}>
            <Caption>Training notes:</Caption>
            <Text>
              {this.props.training.userNote || "Ops... It seems haven't left any note for this training"}
            </Text>
          </View>
          {
            this.props.training.exercises.map((exercise, index) => (
              <TrainingHistoryExercise exercise={exercise} id={index} key={index.toString()}/>
            ))
          }

        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, componentProps) => {
  return {
    training: pipe(
      prop('trainingsArchive'),
      find((training) => training.key.id === componentProps.navigation.state.params.trainingId),
      prop('model')
    )(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingHistoryScreen)
