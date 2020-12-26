export interface ToastMessage {
    title?: string
    message: string,
    type: 'danger' | 'warning' | 'success' | 'info',
    duration?: number
}