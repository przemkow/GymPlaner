import React, { PropTypes } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, Alert} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'

// Styles
import styles from './Styles/CurrentTrainingScreenStyle'
import { propOr } from 'ramda'

class CurrentTraining extends React.Component {
  static propTypes = {
    trainings: PropTypes.array
  }

  render () {
    const trainingsList = () => {
      const availableTrainings = this.props.trainings.map((training) => (
        {
          text: training.model.trainingName,
          onPress: () => this.props.startNewTraining(training.key.id)
        }
      ))
      return availableTrainings.length
        ? Alert.alert(
          'Start new training',
          'Select training you want to start:',
          availableTrainings,
          { cancelable: false }
        )
        : Alert.alert(
          'Uuups...',
          "You haven't created any training yet",
        )
    }

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>CurrentTraining Screen</Text>
          <Button
            onPress={trainingsList}
            title="Start training"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    trainings: propOr([], 'trainings', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startNewTraining: (trainingId) => dispatch(TrainingInProgressFromRedux.startNewTraining({trainingId})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTraining)
