import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportlostComponent } from './reportlost.component';

describe('ReportlostComponent', () => {
  let component: ReportlostComponent;
  let fixture: ComponentFixture<ReportlostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportlostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportlostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
