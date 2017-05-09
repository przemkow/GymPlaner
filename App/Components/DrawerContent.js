import React from 'react'
import { Text } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { DrawerItems } from 'react-navigation';
import { View, Divider, Image } from '@shoutem/ui'
import Colors from '../Themes/Colors'
import Images from '../Themes/Images'
export default class DrawerContent extends React.Component {

  render () {
    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{marginTop: 30, marginBottom: 30}}
            styleName="medium-avatar"
            source={Images.user}
          />
        </View>
        <Divider styleName="line"/>
        <DrawerItems {...this.props} activeTintColor={Colors.red}/>
      </View>
    )
  }
}

