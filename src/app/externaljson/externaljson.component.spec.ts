import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaljsonComponent } from './externaljson.component';

describe('ExternaljsonComponent', () => {
  let component: ExternaljsonComponent;
  let fixture: ComponentFixture<ExternaljsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternaljsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternaljsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
