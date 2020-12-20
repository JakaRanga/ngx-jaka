import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJakaComponent } from './ngx-jaka.component';

describe('NgxJakaComponent', () => {
  let component: NgxJakaComponent;
  let fixture: ComponentFixture<NgxJakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
