import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconsumerpageComponent } from './updateconsumerpage.component';

describe('UpdateconsumerpageComponent', () => {
  let component: UpdateconsumerpageComponent;
  let fixture: ComponentFixture<UpdateconsumerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconsumerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateconsumerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
