import React, { PropTypes } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'


import TrainingFormAction from '../Redux/TrainingFormRedux'
import TrainingsAction from '../Redux/TrainingsRedux'

import TrainingForm from '../Components/TrainingForm'
// import NewExerciseScreen from 'NewExerciseScreen'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NewTrainingScreenStyle'

class NewTraining extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    trainingForm: PropTypes.object,
    createNewTraining: PropTypes.func
  }

  componentWillMount () {
  }

  render () {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
          <TrainingForm
            onSave={() => this.props.createNewTraining(this.props.trainingForm)}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    trainingForm: pathOr({}, ['trainingForm', 'model'], state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTraining: (newTrainingObject) => dispatch(TrainingsAction.addNewTraining({newTrainingObject})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining)
