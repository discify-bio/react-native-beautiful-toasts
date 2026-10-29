import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-native-beautiful-toasts'
import Demo from './Demo'

const App = () => {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <Provider
          config={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          <Demo />
        </Provider>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

export default App
