import React, {PropTypes} from 'react'
import { KeyboardAvoidingView, ListView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { propOr } from 'ramda'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Button, Text ,Row, View, Icon, Divider } from '@shoutem/ui'
import TrainingsAction from '../Redux/TrainingsRedux'

// Styles
import styles from './Styles/TrainingsListScreenStyle'

class TrainingsList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    trainings: PropTypes.array,
    editTraining: PropTypes.func,
  }

  render () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const trainingsDS = ds.cloneWithRows(this.props.trainings)
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <ListView
            dataSource={trainingsDS}
            scrollEnabled={false}
            renderRow={ training => (
              <Row styleName="small">
                <Text>{training.model.trainingName}</Text>
                <TouchableOpacity
                  onPress={() => this.props.editTraining(training.key.id)}>
                  <Icon styleName="disclosure" name="edit" />
                </TouchableOpacity>
              </Row>
            )
            }
            renderSeparator={(_, rowId) => <Divider key={rowId} styleName="line" />}
            enableEmptySections={true}
          />

          <Button
            styleName="secondary"
            onPress={() => this.props.newTraining()}>
            <Text>NEW TRAINING</Text>
          </Button>
        </KeyboardAvoidingView>
      </View>
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
    editTraining: (trainingUUID) => dispatch(TrainingsAction.editTraining({trainingUUID})),
    newTraining: () => dispatch(TrainingsAction.newTraining())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsList)
