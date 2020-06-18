import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarisiBlanketComponent } from './komentarisi-blanket.component';

describe('KomentarisiBlanketComponent', () => {
  let component: KomentarisiBlanketComponent;
  let fixture: ComponentFixture<KomentarisiBlanketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarisiBlanketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarisiBlanketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
