import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import Success from '../animations/Success'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ShowProperties } from '../types'
import Warning from '../animations/Warning'
import Error from '../animations/Error'
import Link from '../animations/Link'

interface IProps {
  value: SharedValue<number>
  text: string | null
  icon: ShowProperties['icon'] | null
  padding?: number
  font?: string
  backgroundColor?: string
}

const Toast: React.FC<IProps> = ({
  value,
  text,
  icon,
  font,
  padding,
  backgroundColor
}) => {
  const insets = useSafeAreaInsets()

  const backgroundAnimation = useAnimatedStyle(() => {
    return {
      opacity: value.value
    }
  })

  const getIcon = () => {
    switch (icon) {
      case 'success':
        return <Success/>
      case 'error':
        return <Error/>
      case 'warning':
        return <Warning/>
      case 'link':
        return <Link/>
    }
  }
  
  return (
    <Animated.View
      style={[
        {
          ...styles.layout,
          bottom: insets.bottom + styles.layout.bottom,
          paddingHorizontal: padding
        },
        backgroundAnimation
      ]}
      pointerEvents='none'
    >
      <View
        style={[
          styles.toast,
          backgroundColor ? {
            backgroundColor
          } : undefined
        ]}
      >
        {getIcon()}
        {text && (
          <Text
            style={[
              styles.text,
              {
                fontFamily: font
              }
            ]}
          >
            {text}
          </Text>
        )}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  layout: {
    position: 'absolute',
    zIndex: 1000000,
    bottom: 100,
    width: '100%'
  },
  toast: {
    backgroundColor: '#2B2B2B',
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    marginLeft: 8
  }
})

export default Toast
