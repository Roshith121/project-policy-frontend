import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpolicypageComponent } from './viewpolicypage.component';

describe('ViewpolicypageComponent', () => {
  let component: ViewpolicypageComponent;
  let fixture: ComponentFixture<ViewpolicypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpolicypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpolicypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
