import React, {PropTypes} from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { propOr } from 'ramda'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Button, Text, Heading} from '@shoutem/ui'
// Styles
import styles from './Styles/TrainingsListScreenStyle'

class TrainingsList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    trainings: PropTypes.array
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Heading>TrainingsList Screen</Heading>

          {
            this.props.trainings.map((training, index) => {
              return (
                <Text key={index.toString()}>TrainingsList {index}</Text>
              )
            })
          }
          <Button
              styleName="secondary"
              onPress={() => this.props.navigation.navigate('NewTrainingsScreen')}>
            <Text>NEW TRAINING</Text>
          </Button>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsList)
