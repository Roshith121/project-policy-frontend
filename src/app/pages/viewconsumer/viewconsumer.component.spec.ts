import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsumerComponent } from './viewconsumer.component';

describe('ViewconsumerComponent', () => {
  let component: ViewconsumerComponent;
  let fixture: ComponentFixture<ViewconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
