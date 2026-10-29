import LottieView from 'lottie-react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ShowProperties } from '../types'

const sources = {
  success: require('../../lottie/success.json'),
  warning: require('../../lottie/warning.json'),
  error: require('../../lottie/error.json'),
  link: require('../../lottie/link.json'),
  copy: require('../../lottie/copy.json')
}

interface IProps {
  icon: ShowProperties['icon']
}

const Icon: React.FC<IProps> = ({ icon }) => {
  return (
    <LottieView
      source={sources[icon]}
      autoPlay
      loop={false}
      style={styles.view}
    />
  )
}

const styles = StyleSheet.create({
  view: {
    width: 25,
    height: 25
  }
})

export default Icon
