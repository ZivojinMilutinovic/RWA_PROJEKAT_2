import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaBlanketaComponent } from './baza-blanketa.component';

describe('BazaBlanketaComponent', () => {
  let component: BazaBlanketaComponent;
  let fixture: ComponentFixture<BazaBlanketaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazaBlanketaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazaBlanketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
