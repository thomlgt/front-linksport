import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubInscriptionComponent } from './club-inscription.component';

describe('ClubInscriptionComponent', () => {
  let component: ClubInscriptionComponent;
  let fixture: ComponentFixture<ClubInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
