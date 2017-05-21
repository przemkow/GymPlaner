import React , {PropTypes} from 'react'
import { Button, View, Text, TextInput } from '@shoutem/ui'
import styles from './Styles/NumberSelectorStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { equals } from 'ramda'
const toDisplayFormat = (number) => Number.isFinite(number) ? number.toString() : ''
const toReturnFormat = (string, allowFloats) => allowFloats ? parseFloat(string) : parseInt(string)
export default class NumberSelector extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    allowFloats: PropTypes.bool
  }

  inputChangeHandler (newValue) {
    if (newValue.match(/^(\d)+((\.)(\d)+)?$/g)) {
      this.setState({
        inputValue: newValue
      })
      this.props.onChange(toReturnFormat(newValue))
    } else if ((this.props.allowFloats && newValue.match(/^(\d)+(\.)$/g)) || newValue === '') {
      this.setState({
        inputValue: newValue
      })
      this.props.onChange(toReturnFormat(newValue))
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      inputValue: null,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      inputValue: toDisplayFormat(nextProps.value)
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !equals(nextProps, this.props) || !equals(nextState, this.state)
  }

  render () {
    const inputValue = this.props.value || 0;
    return (
      <View styleName="horizontal flexible">
        <Button styleName="full-width"
          onPress={() => this.props.onChange(inputValue - 1)}>
          <MaterialCommunityIcons name='minus' size={20} />
        </Button>
        {
          this.props.allowFloats ? (
            <Button styleName="full-width"
              onPress={() => this.props.onChange(inputValue - 0.5)}>
              <Text>-0.5</Text>
            </Button>
            ) : null
        }

        <TextInput
          onChangeText={(newValue) => this.inputChangeHandler(newValue)}
          value={this.state.inputValue}
          defaultValue={toDisplayFormat(this.props.value)}
          keyboardType="numeric"
          style={{width: 70, textAlign: 'center'}}
        />
        {
          this.props.allowFloats ? (
            <Button styleName="full-width"
              onPress={() => this.props.onChange(inputValue + 0.5)}>
              <Text>+0.5</Text>
            </Button>
          ) : null
        }

        <Button styleName="full-width"
          onPress={() => this.props.onChange(inputValue + 1)}>
          <MaterialCommunityIcons name='plus' size={20} />
        </Button>
      </View>
    )
  }
}

// // Prop type warnings
// NumberSelector.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// NumberSelector.defaultProps = {
//   someSetting: false
// }
