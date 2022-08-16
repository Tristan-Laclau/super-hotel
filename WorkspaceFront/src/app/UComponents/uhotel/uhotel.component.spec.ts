import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhotelComponent } from './uhotel.component';

describe('UhotelComponent', () => {
  let component: UhotelComponent;
  let fixture: ComponentFixture<UhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
