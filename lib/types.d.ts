export interface ShowProperties {
    text: string;
    icon: 'success' | 'warning' | 'error';
}
export interface ToastMethods {
    show: (properties: ShowProperties) => void;
}
