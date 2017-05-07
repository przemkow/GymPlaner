import React, { PropTypes } from 'react'
import { TouchableOpacity, ListView} from 'react-native'
import { connect } from 'react-redux'
import { View, Text, Row, Divider, Icon } from '@shoutem/ui'
import { prop } from 'ramda'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TrainingsHistoryScreenStyle'

class TrainingsHistory extends React.Component {
  static propTypes = {
    archivedTrainings: PropTypes.array
  }

  constructor (props) {
    super(props)
    this.listViewDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  render () {
    const trainingsDS = this.listViewDataSource.cloneWithRows(this.props.archivedTrainings)
    return (
      <View style={styles.container}>
        <ListView
          dataSource={trainingsDS}
          scrollEnabled={false}
          renderRow={ training => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TrainingHistory', {trainingId: training.key.id})}
            >
            <Row styleName="small">
              <Text>{training.model.trainingName}</Text>

                <Icon styleName="disclosure" name="right-arrow" />

            </Row>
            </TouchableOpacity>)
          }
          renderSeparator={(_, rowId) => <Divider key={rowId} styleName="line" />}
          enableEmptySections={true}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    archivedTrainings: prop('trainingsArchive', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsHistory)
