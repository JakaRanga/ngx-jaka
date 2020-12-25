import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastMessage } from '../../../models/toast-message.interface';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'lib-jaka-toaster',
  templateUrl: './jaka-toaster.component.html',
  styleUrls: ['./jaka-toaster.component.scss']
})
export class JakaToasterComponent implements OnInit, OnDestroy {

  @Input() position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' = 'bottom-right';

  messages: Array<ToastMessage>;
  private messageSubscription: Subscription;

  constructor(private toastService: ToastService) {
    this.messages = new Array<ToastMessage>();
  }

  ngOnInit(): void {
    this.messageSubscription = this.toastService.onMessage()
      .subscribe(message => {
        this.messages.push(message);
        setTimeout(() => this.removeMessage(message), 3000);
      });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

  private removeMessage(message: ToastMessage) {
    if (!this.messages.includes(message))
      return;

    this.messages = this.messages.filter(x => x !== message);
  }

}
