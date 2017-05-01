import { StyleSheet } from 'react-native'

import Colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: Colors.greenLighter2,
    borderColor: Colors.green,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 0,
    borderBottomWidth: 0

  },
  nextSeries: {
    backgroundColor: Colors.redLighter1,
    borderColor: Colors.red,
  }
})

export const shoutemOverwrite = {
  divider: {
    flex: 1,
    padding: 0,
    backgroundColor: Colors.greenLighter2,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  caption: {
    marginTop: 3,
    marginBottom: 0,
  },
  timerBody: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  nextSeries: {
    backgroundColor: Colors.redLighter1,
    borderColor: Colors.red,
  },
  captionNextSeries: {
    color: Colors.silver
  }
}
