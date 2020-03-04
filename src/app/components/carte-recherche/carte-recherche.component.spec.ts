import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRechercheComponent } from './carte-recherche.component';

describe('CarteRechercheComponent', () => {
  let component: CarteRechercheComponent;
  let fixture: ComponentFixture<CarteRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
