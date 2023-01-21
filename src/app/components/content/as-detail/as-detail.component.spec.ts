import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsDetailComponent } from './as-detail.component';

describe('AsDetailComponent', () => {
  let component: AsDetailComponent;
  let fixture: ComponentFixture<AsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
