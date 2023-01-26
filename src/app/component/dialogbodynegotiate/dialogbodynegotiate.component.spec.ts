import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbodynegotiateComponent } from './dialogbodynegotiate.component';

describe('DialogbodynegotiateComponent', () => {
  let component: DialogbodynegotiateComponent;
  let fixture: ComponentFixture<DialogbodynegotiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogbodynegotiateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogbodynegotiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
