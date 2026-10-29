import { useContext } from 'react'
import Context from './Context'

const useToast = () => {
  const toast = useContext(Context)
  if (!toast) throw new Error('useToast must be used inside <Provider> from react-native-beautiful-toasts')
  return toast
}

export default useToast
