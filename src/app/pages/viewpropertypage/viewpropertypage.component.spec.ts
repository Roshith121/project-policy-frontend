import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpropertypageComponent } from './viewpropertypage.component';

describe('ViewpropertypageComponent', () => {
  let component: ViewpropertypageComponent;
  let fixture: ComponentFixture<ViewpropertypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpropertypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpropertypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
