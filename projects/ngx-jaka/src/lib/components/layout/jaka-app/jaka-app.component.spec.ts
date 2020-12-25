import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakaAppComponent } from './jaka-app.component';

describe('JakaAppComponent', () => {
  let component: JakaAppComponent;
  let fixture: ComponentFixture<JakaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
