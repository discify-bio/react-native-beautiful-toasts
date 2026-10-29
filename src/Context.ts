import { createContext } from 'react'
import { ToastMethods } from './types'

const Context = createContext<ToastMethods | null>(null)

export default Context
