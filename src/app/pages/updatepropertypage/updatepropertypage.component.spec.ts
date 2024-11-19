import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepropertypageComponent } from './updatepropertypage.component';

describe('UpdatepropertypageComponent', () => {
  let component: UpdatepropertypageComponent;
  let fixture: ComponentFixture<UpdatepropertypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepropertypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepropertypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
