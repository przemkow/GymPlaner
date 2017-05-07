import React, { PropTypes } from 'react'
import { KeyboardAvoidingView, Alert} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import TrainingInProgressFromRedux from '../Redux/TrainingInProgressFromRedux'
import { Button, Text ,Row, View, Icon, Divider } from '@shoutem/ui'
// Styles
import styles from './Styles/CurrentTrainingScreenStyle'
import { pathOr, pipe, propOr, isEmpty, not } from 'ramda'

class CurrentTraining extends React.Component {
  static propTypes = {
    trainings: PropTypes.array,
    hasTrainingInProgress: PropTypes.bool
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
      <View>
        <KeyboardAvoidingView behavior='position'>
          {
            this.props.hasTrainingInProgress ?
              <Button
                styleName="secondary"
                onPress={() => this.props.navigation.navigate('TrainingInProgressScreen')}>
                <Text>CONTINUE TRAINING</Text>
              </Button> :
              null
          }
          <Button
              onPress={trainingsList}>
            <Text>START NEW TRAINING</Text>
          </Button>
        </KeyboardAvoidingView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    trainings: propOr([], 'trainings', state),
    hasTrainingInProgress: pipe(
      pathOr('', ['trainingInProgressForm', 'trainingId']),
      isEmpty,
      not
    )(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startNewTraining: (trainingId) => dispatch(TrainingInProgressFromRedux.startNewTraining({trainingId})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTraining)
