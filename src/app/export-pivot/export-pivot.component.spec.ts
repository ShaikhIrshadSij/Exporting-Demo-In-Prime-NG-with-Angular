import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPivotComponent } from './export-pivot.component';

describe('ExportPivotComponent', () => {
  let component: ExportPivotComponent;
  let fixture: ComponentFixture<ExportPivotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPivotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
