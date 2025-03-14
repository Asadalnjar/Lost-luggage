import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfoundComponent } from './reportfound.component';

describe('ReportfoundComponent', () => {
  let component: ReportfoundComponent;
  let fixture: ComponentFixture<ReportfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
