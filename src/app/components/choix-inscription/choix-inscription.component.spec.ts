import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixInscriptionComponent } from './choix-inscription.component';

describe('ChoixInscriptionComponent', () => {
  let component: ChoixInscriptionComponent;
  let fixture: ComponentFixture<ChoixInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
