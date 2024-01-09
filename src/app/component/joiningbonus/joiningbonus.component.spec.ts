import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningbonusComponent } from './joiningbonus.component';

describe('JoiningbonusComponent', () => {
  let component: JoiningbonusComponent;
  let fixture: ComponentFixture<JoiningbonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoiningbonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoiningbonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
