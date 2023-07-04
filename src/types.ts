export interface ShowProperties {
  text: string
  icon: 'success' | 'warning' | 'error' | 'link'
}

export interface ToastMethods {
  show: (properties: ShowProperties) => void
}
