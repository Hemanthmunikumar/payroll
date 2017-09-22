import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployregisterComponent } from './employregister.component';

describe('EmployregisterComponent', () => {
  let component: EmployregisterComponent;
  let fixture: ComponentFixture<EmployregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
