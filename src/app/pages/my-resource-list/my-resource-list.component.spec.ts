import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResourceListComponent } from './my-resource-list.component';

describe('MyResourceListComponent', () => {
  let component: MyResourceListComponent;
  let fixture: ComponentFixture<MyResourceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyResourceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyResourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
