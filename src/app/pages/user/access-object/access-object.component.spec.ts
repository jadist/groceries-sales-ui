import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessObjectComponent } from './access-object.component';

describe('AccessObjectComponent', () => {
  let component: AccessObjectComponent;
  let fixture: ComponentFixture<AccessObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
