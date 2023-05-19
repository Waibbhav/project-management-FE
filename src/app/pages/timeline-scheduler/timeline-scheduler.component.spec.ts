import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSchedulerComponent } from './timeline-scheduler.component';

describe('TimelineSchedulerComponent', () => {
  let component: TimelineSchedulerComponent;
  let fixture: ComponentFixture<TimelineSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
