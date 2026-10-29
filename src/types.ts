export interface ShowProperties {
  text: string
  icon: 'success' | 'warning' | 'error' | 'link' | 'copy'
  numberOfLines?: number
}

export interface ToastMethods {
  show: (properties: ShowProperties) => void
}
