import React, {PropTypes} from 'react'
import { View, Animated } from 'react-native'
import styles, {shoutemOverwrite} from './Styles/TimerStyle'
import { connect } from 'react-redux'
import { propOr } from 'ramda'
import { Title, Text, Caption, Divider } from '@shoutem/ui'

export class Timer extends React.Component {
  static propTypes = {
    breakTime: PropTypes.number,
    visible: PropTypes.bool
  }

  componentWillMount () {
    this.viewHeight = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
  }

  animationsHandler () {
    if (this.props.timer.isCounting && this.props.visible) {
      Animated.timing(this.viewHeight, {
        toValue: 80,
        duration: 500
      }).start()
    } else {
      Animated.timing(this.viewHeight, {
        toValue: 0,
        duration: 500
      }).start()
    }
  }

  render () {
    this.animationsHandler()
    const animatedView = {
      height: this.viewHeight,
      borderBottomWidth: this.props.visible ? 3 : 0
    }

    const nextSeries = this.props.breakTime < this.props.timer.currentTime;
    const viewStyles = [styles.container]
    let dividerStyles = shoutemOverwrite.divider
    let captionStyles = shoutemOverwrite.caption
    if (nextSeries) {
      viewStyles.push(styles.nextSeries)
      dividerStyles = {...dividerStyles, ...shoutemOverwrite.nextSeries}
      captionStyles = {...captionStyles, ...shoutemOverwrite.captionNextSeries}
    }

    return (
      <Animated.View style={[viewStyles, animatedView]}>
        <Divider styleName="section-header" style={dividerStyles}>
          <Caption style={captionStyles}>Take a break</Caption>
          <Caption style={captionStyles}>Expected break: {this.props.breakTime}sec</Caption>
        </Divider>
        <Title style={shoutemOverwrite.timerBody}>{this.props.timer.currentTime}sec</Title>
      </Animated.View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timer: propOr({}, 'timer', state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)

