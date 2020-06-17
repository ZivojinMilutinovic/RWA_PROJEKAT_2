import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ButtonComponent } from './d3-button.component';

describe('D3ButtonComponent', () => {
  let component: D3ButtonComponent;
  let fixture: ComponentFixture<D3ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
