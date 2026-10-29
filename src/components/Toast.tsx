import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller'
import { BlurView } from '@react-native-community/blur'
import { ShowProperties } from '../types'
import Icon from './Icon'

interface IProps {
  value: SharedValue<number>
  text: string
  icon: ShowProperties['icon']
  numberOfLines?: number
  paddingHorizontal?: number
  paddingBottom?: number
  font?: string
  backgroundColor?: string
  tintOpacity?: number
}

const DEFAULT_BACKGROUND = '#2B2B2B'
const isIOS = Platform.OS === 'ios'

const Toast: React.FC<IProps> = ({
  value,
  text,
  icon,
  numberOfLines,
  font,
  paddingHorizontal,
  paddingBottom = 0,
  backgroundColor = DEFAULT_BACKGROUND,
  tintOpacity = 0.25
}) => {
  const insets = useSafeAreaInsets()
  const { height, progress } = useReanimatedKeyboardAnimation()

  const animatedStyle = useAnimatedStyle(() => {
    const safeArea = interpolate(progress.get(), [0, 1], [insets.bottom, 0])
    return {
      opacity: value.get(),
      bottom: Math.abs(height.get()) + safeArea + paddingBottom
    }
  })

  return (
    <Animated.View style={[styles.layout, { paddingHorizontal }, animatedStyle]}>
      <View style={[styles.toast, isIOS ? styles.glass : { backgroundColor }]}>
        {isIOS && (
          <View style={styles.glassClip}>
            <BlurView style={StyleSheet.absoluteFill} blurType='ultraThinMaterialDark' blurAmount={25} />
            <View style={[styles.glassTint, { backgroundColor, opacity: tintOpacity }]} />
          </View>
        )}
        {icon && <Icon icon={icon} />}
        {!!text && (
          <Text numberOfLines={numberOfLines} style={[styles.text, { fontFamily: font }]}>
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
    width: '100%',
    pointerEvents: 'none'
  },
  toast: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  glass: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  glassClip: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden'
  },
  glassTint: StyleSheet.absoluteFillObject,
  text: {
    color: '#ffffff',
    flexShrink: 1,
    ...Platform.select({
      ios: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        letterSpacing: -0.16
      },
      default: {
        marginLeft: 8
      }
    })
  }
})

export default Toast
