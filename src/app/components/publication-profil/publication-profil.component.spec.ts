import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationProfilComponent } from './publication-profil.component';

describe('PublicationProfilComponent', () => {
  let component: PublicationProfilComponent;
  let fixture: ComponentFixture<PublicationProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
