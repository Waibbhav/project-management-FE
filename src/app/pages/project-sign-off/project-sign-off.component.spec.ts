import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSignOffComponent } from './project-sign-off.component';

describe('ProjectSignOffComponent', () => {
  let component: ProjectSignOffComponent;
  let fixture: ComponentFixture<ProjectSignOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSignOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSignOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
