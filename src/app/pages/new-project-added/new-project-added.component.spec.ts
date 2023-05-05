import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectAddedComponent } from './new-project-added.component';

describe('NewProjectAddedComponent', () => {
  let component: NewProjectAddedComponent;
  let fixture: ComponentFixture<NewProjectAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProjectAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProjectAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
