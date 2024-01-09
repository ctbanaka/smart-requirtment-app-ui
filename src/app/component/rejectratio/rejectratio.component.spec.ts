import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectratioComponent } from './rejectratio.component';

describe('RejectratioComponent', () => {
  let component: RejectratioComponent;
  let fixture: ComponentFixture<RejectratioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectratioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectratioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
