import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakaToolbarComponent } from './jaka-toolbar.component';

describe('JakaToolbarComponent', () => {
  let component: JakaToolbarComponent;
  let fixture: ComponentFixture<JakaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakaToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
