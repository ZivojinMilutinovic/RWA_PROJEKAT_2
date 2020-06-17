import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapraviBlanketComponent } from './napravi-blanket.component';

describe('NapraviBlanketComponent', () => {
  let component: NapraviBlanketComponent;
  let fixture: ComponentFixture<NapraviBlanketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapraviBlanketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapraviBlanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
