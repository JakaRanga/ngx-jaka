import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastMessage } from '../models/toast-message.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private subject = new Subject<ToastMessage>();

  onMessage(): Observable<ToastMessage> {
    return this.subject.asObservable();
  }

  pushMessage(message: ToastMessage) {
    if (message === undefined) return;

    this.subject.next(message);
  }

}
