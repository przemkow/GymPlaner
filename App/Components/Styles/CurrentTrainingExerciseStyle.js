import { StyleSheet, Dimensions } from 'react-native'
import { Metrics } from '../../Themes/'
const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding,
    borderColor: 'red',
    borderWidth: 1,
  },
  repsButton: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e01a3c',
    borderWidth: 1,
  }
})
