import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreProfilComponent } from './autre-profil.component';

describe('AutreProfilComponent', () => {
  let component: AutreProfilComponent;
  let fixture: ComponentFixture<AutreProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutreProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutreProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
