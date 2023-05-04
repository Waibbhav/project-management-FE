import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePullDetailsComponent } from './resource-pull-details.component';

describe('ResourcePullDetailsComponent', () => {
  let component: ResourcePullDetailsComponent;
  let fixture: ComponentFixture<ResourcePullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcePullDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcePullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
