import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePullComponent } from './resource-pull.component';

describe('ResourcePullComponent', () => {
  let component: ResourcePullComponent;
  let fixture: ComponentFixture<ResourcePullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcePullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcePullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
