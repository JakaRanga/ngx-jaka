import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastMessage } from '../../../models/toast-message.interface';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'jaka-toaster',
  templateUrl: './jaka-toaster.component.html',
  styleUrls: ['./jaka-toaster.component.scss']
})
export class JakaToasterComponent implements OnInit, OnDestroy {

  @Input() position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' = 'bottom-right';
  @Output() onToastAppear: EventEmitter<ToastMessage>;
  @Output() onToastDisappear: EventEmitter<ToastMessage>;

  toasts: Array<ToastMessage>;
  private toastSubscription: Subscription;

  constructor(private toastService: ToastService) {
    this.toasts = new Array<ToastMessage>();
    this.onToastAppear = new EventEmitter<ToastMessage>();
    this.onToastDisappear = new EventEmitter<ToastMessage>();
  }

  ngOnInit(): void {
    this.toastSubscription = this.toastService.onMessage()
      .subscribe((toast: ToastMessage) => {
        this.toasts.push(toast);
        this.onToastAppear.emit(toast);

        setTimeout(() => this.removeToast(toast), toast.duration ? toast.duration : 3000);
      });
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }

  onToastDismiss(toast: ToastMessage) {
    this.removeToast(toast);
  }

  private removeToast(message: ToastMessage) {
    if (!this.toasts.includes(message))
      return;

    this.toasts = this.toasts.filter(x => x !== message);
  }

}
