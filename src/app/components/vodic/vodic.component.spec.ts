import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VodicComponent } from './vodic.component';

describe('VodicComponent', () => {
  let component: VodicComponent;
  let fixture: ComponentFixture<VodicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VodicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VodicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
