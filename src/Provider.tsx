import React from 'react'
import { MutableRefObject, PropsWithChildren, useEffect, useRef, useState } from 'react'
import Context from './Context'
import { ShowProperties, ToastMethods } from './types'
import { Host, Portal } from 'react-native-portalize'
import Toast from './components/Toast'
import { Easing, runOnJS, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated'

interface IProps {
  config?: {
    font?: string
    paddingHorizontal?: number
    backgroundColor?: string
  }
}

const Provider: React.FC<PropsWithChildren<IProps>> = ({
  children,
  config
}) => {
  const ref = useRef<ToastMethods>(null) as MutableRefObject<ToastMethods>

  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState<string | null>(null)
  const [icon, setIcon] = useState<ShowProperties['icon'] | null>(null)

  useEffect(() => {
    ref.current = {
      show: start
    }
  }, [])

  const value = useSharedValue(0)

  const start = (properties: ShowProperties) => {
    if (properties.text) setText(properties.text)
    if (properties.icon) setIcon(properties.icon)
    
    startAnimation()
  }

  const startAnimation = () => {
    setIsOpen(true)
    value.value = withSequence(
      withTiming(1, {
        easing: Easing.inOut(Easing.quad),
        duration: 350
      }),
      withDelay(2500, withTiming(0, {
        easing: Easing.inOut(Easing.quad),
        duration: 350
      }, () => {
        runOnJS(setIsOpen)(false)
      }))
    )
  }
  
  return (
    <Context.Provider
      value={ref}
    >
      <Host
        style={{
          flex: 1
        }}
      >
        <Portal>
          <Toast
            value={value}
            text={text}
            icon={icon}
            key={String(isOpen)}
            padding={config?.paddingHorizontal}
            font={config?.font}
            backgroundColor={config?.backgroundColor}
          />
        </Portal>
        {children}
      </Host>
    </Context.Provider>
  )
}

export default Provider
