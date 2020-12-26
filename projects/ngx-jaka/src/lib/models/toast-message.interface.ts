export interface ToastMessage {
    message: string,
    type: 'danger' | 'warning' | 'success',
    duration?: number
}