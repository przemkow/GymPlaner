import React, { PropTypes } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import TrainingsAction from '../Redux/TrainingsRedux'
import TrainingForm from '../Components/TrainingForm'
// Styles
import styles from './Styles/EditTrainingScreenStyle'
import { pathOr } from 'ramda'

class EditTrainingScreen extends React.Component {
  static propTypes = {
    trainingForm: PropTypes.object,
    updateTraining: PropTypes.func
  }

  render () {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
          <TrainingForm
            onSave={() => this.props.updateTraining(this.props.trainingForm)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trainingForm: pathOr({}, ['trainingForm'], state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTraining: (trainingObject) => dispatch(TrainingsAction.updateTraining({trainingObject})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrainingScreen)
