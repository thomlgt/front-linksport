import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurInscriptionComponent } from './joueur-inscription.component';

describe('JoueurInscriptionComponent', () => {
  let component: JoueurInscriptionComponent;
  let fixture: ComponentFixture<JoueurInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoueurInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoueurInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
