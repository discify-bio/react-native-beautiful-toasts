export interface ShowProperties {
  text: string
  icon: 'success' | 'warning' | 'error' | 'link' | 'copy'
}

export interface ToastMethods {
  show: (properties: ShowProperties) => void
}
