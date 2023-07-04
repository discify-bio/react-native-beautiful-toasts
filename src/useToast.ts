import { useContext, useMemo } from 'react'
import Context from './Context'

const useToast = () => {
  const toastContext = useContext(Context)
  const toast = useMemo(() => {
    return toastContext.current
  }, [toastContext])
  return toast
}

export default useToast
