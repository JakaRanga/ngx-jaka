import { Message } from "@angular/compiler/src/i18n/i18n_ast";

export interface ToastMessage {
    message: string,
    type: 'danger' | 'warning' | 'success'
}