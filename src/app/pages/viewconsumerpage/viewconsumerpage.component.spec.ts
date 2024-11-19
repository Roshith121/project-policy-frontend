import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsumerpageComponent } from './viewconsumerpage.component';

describe('ViewconsumerpageComponent', () => {
  let component: ViewconsumerpageComponent;
  let fixture: ComponentFixture<ViewconsumerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconsumerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewconsumerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
