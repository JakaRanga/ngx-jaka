import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakaSidebarComponent } from './jaka-sidebar.component';

describe('JakaSidebarComponent', () => {
  let component: JakaSidebarComponent;
  let fixture: ComponentFixture<JakaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
