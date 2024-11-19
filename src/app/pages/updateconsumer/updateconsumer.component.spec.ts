import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconsumerComponent } from './updateconsumer.component';

describe('UpdateconsumerComponent', () => {
  let component: UpdateconsumerComponent;
  let fixture: ComponentFixture<UpdateconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
