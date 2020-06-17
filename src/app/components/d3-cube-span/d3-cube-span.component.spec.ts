import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CubeSpanComponent } from './d3-cube-span.component';

describe('D3CubeSpanComponent', () => {
  let component: D3CubeSpanComponent;
  let fixture: ComponentFixture<D3CubeSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CubeSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CubeSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
