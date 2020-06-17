import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiBlanketiComponent } from './moji-blanketi.component';

describe('MojiBlanketiComponent', () => {
  let component: MojiBlanketiComponent;
  let fixture: ComponentFixture<MojiBlanketiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojiBlanketiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojiBlanketiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
