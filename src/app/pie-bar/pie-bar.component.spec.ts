import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieBarComponent } from './pie-bar.component';

describe('PieBarComponent', () => {
  let component: PieBarComponent;
  let fixture: ComponentFixture<PieBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
