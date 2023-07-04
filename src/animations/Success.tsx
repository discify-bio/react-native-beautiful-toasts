import LottieView from 'lottie-react-native'
import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface IProps {
  style?: StyleProp<ViewStyle>
}

const Success: React.FC<IProps> = ({ style }) => {
  return (
    <LottieView
      source={require('../../lottie/success.json')}
      autoPlay
      style={[styles.view, style]}
      loop={false}
    />
  )
}

const styles = StyleSheet.create({
  view: {
    width: 25,
    height: 25
  }
})

export default Success
