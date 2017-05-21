import React , { PropTypes } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Examples } from '@shoutem/ui'
import Calendar from 'react-native-calendar';
// Styles
import styles from './Styles/CalendarScreenStyle'
import moment from 'moment'
import { pipe, prop, map, path, contains } from 'ramda'

class CalendarScreen extends React.Component {
  static propTypes = {
    pastTrainingsDates: PropTypes.array,
    trainingsArchive: PropTypes.array,
  }

  constructor (props) {
    super(props)
    this.state = {
      selectedDate: '2017-07-03'
    }
  }

  findTrainingWithDate (date) {
    const trainingExist = contains(date, this.props.pastTrainingsDates);
    return trainingExist ? this.props.trainingsArchive.find(training => {
      return moment(training.model.date).format('YYYY-MM-DD') === date
    }) : undefined;
  }

  selectDateHandler (date) {
    const normalizedDate = moment(date).format('YYYY-MM-DD');
    const selectedTraining = this.findTrainingWithDate(normalizedDate);
    if (selectedTraining) {
      this.props.navigation.navigate('TrainingHistory', {trainingId: selectedTraining.key.id})
    }
  }
  render () {
    const customStyle = {
      hasEventCircle: {
        backgroundColor: '#61B8B8'
      }
    }
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
          <Calendar
            showControls
            showEventIndicators
            onDateSelect={this.selectDateHandler.bind(this)}
            eventDates={this.props.pastTrainingsDates}
            customStyle={customStyle} />
          <Text>{moment(this.state.selectedDate).fromNow()}</Text>
        </KeyboardAvoidingView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    pastTrainingsDates: pipe(
      prop('trainingsArchive'),
      map(path(['model', 'date'])),
      map(date => moment(date).format('YYYY-MM-DD'))
    )(state),
    trainingsArchive: prop('trainingsArchive', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)
