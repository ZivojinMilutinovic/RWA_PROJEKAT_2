import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterijaliInfoComponent } from './materijali-info.component';

describe('MaterijaliInfoComponent', () => {
  let component: MaterijaliInfoComponent;
  let fixture: ComponentFixture<MaterijaliInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterijaliInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterijaliInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
