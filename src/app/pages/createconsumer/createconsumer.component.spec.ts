import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconsumerComponent } from './createconsumer.component';

describe('CreateconsumerComponent', () => {
  let component: CreateconsumerComponent;
  let fixture: ComponentFixture<CreateconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
