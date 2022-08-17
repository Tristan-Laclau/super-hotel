import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhotelDetailsComponent } from './uhotel-details.component';

describe('UhotelDetailsComponent', () => {
  let component: UhotelDetailsComponent;
  let fixture: ComponentFixture<UhotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhotelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UhotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
