import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jaka-sidebar',
  templateUrl: './jaka-sidebar.component.html',
  styleUrls: ['./jaka-sidebar.component.scss'],
  host: { 'class': 'flex-fill d-flex flex-column' }
})
export class JakaSidebarComponent implements OnInit {

  @Input() startsOpened: boolean = true;
  @Output() onSidebarToggle: EventEmitter<boolean>;
  isOpen: boolean = true;

  constructor() { 
    this.isOpen = this.startsOpened;
    this.onSidebarToggle = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  protected toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.onSidebarToggle.emit(this.isOpen);
  }


}
