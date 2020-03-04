import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierComponent } from './publier.component';

describe('PublierComponent', () => {
  let component: PublierComponent;
  let fixture: ComponentFixture<PublierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
