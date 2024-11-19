import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepropertyComponent } from './updateproperty.component';

describe('UpdatepropertyComponent', () => {
  let component: UpdatepropertyComponent;
  let fixture: ComponentFixture<UpdatepropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
