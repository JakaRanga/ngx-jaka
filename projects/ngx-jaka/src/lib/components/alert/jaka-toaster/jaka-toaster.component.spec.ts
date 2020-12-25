import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakaToasterComponent } from './jaka-toaster.component';

describe('JakaToasterComponent', () => {
  let component: JakaToasterComponent;
  let fixture: ComponentFixture<JakaToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakaToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakaToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
