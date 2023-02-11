import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccessMapComponent } from './role-access-map.component';

describe('RoleAccessMapComponent', () => {
  let component: RoleAccessMapComponent;
  let fixture: ComponentFixture<RoleAccessMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleAccessMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleAccessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
