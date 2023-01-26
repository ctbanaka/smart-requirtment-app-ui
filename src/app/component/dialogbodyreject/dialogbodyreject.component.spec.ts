import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbodyrejectComponent } from './dialogbodyreject.component';

describe('DialogbodyrejectComponent', () => {
  let component: DialogbodyrejectComponent;
  let fixture: ComponentFixture<DialogbodyrejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogbodyrejectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogbodyrejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
