import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakaCardComponent } from './jaka-card.component';

describe('JakaCardComponent', () => {
  let component: JakaCardComponent;
  let fixture: ComponentFixture<JakaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
