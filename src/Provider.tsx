import React from 'react'
import { PropsWithChildren, useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Context from './Context'
import { ShowProperties, ToastMethods } from './types'
import Toast from './components/Toast'
import { Easing, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated'
import { scheduleOnRN } from 'react-native-worklets'

interface IProps {
  config?: {
    font?: string
    paddingHorizontal?: number
    backgroundColor?: string
    tintOpacity?: number
    paddingBottom?: number
  }
}

const Provider: React.FC<PropsWithChildren<IProps>> = ({
  children,
  config
}) => {
  const [toast, setToast] = useState<(ShowProperties & { id: number }) | null>(null)
  const lastId = useRef(0)
  const value = useSharedValue(0)

  const hide = useCallback(() => setToast(null), [])

  const show = useCallback((properties: ShowProperties) => {
    lastId.current += 1
    setToast({ ...properties, id: lastId.current })

    value.set(withSequence(
      withTiming(1, {
        easing: Easing.inOut(Easing.quad),
        duration: 350
      }),
      withDelay(2500, withTiming(0, {
        easing: Easing.inOut(Easing.quad),
        duration: 350
      }, finished => {
        // A cancelled sequence still calls this with finished = false, e.g. when show() is called again mid-toast.
        if (finished) scheduleOnRN(hide)
      }))
    ))
  }, [hide, value])

  const methods = useMemo<ToastMethods>(() => ({ show }), [show])

  return (
    <Context.Provider value={methods}>
      <View style={styles.container}>
        {children}
        {toast && (
          <Toast
            key={toast.id}
            value={value}
            text={toast.text}
            icon={toast.icon}
            numberOfLines={toast.numberOfLines}
            paddingHorizontal={config?.paddingHorizontal}
            paddingBottom={config?.paddingBottom}
            font={config?.font}
            backgroundColor={config?.backgroundColor}
            tintOpacity={config?.tintOpacity}
          />
        )}
      </View>
    </Context.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Provider
