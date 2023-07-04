import { createContext, MutableRefObject } from 'react'
import { ToastMethods } from './types'

const Context = createContext<MutableRefObject<ToastMethods>>(null as any)

export default Context