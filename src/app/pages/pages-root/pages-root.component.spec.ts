import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRootComponent } from './pages-root.component';

describe('PagesRootComponent', () => {
  let component: PagesRootComponent;
  let fixture: ComponentFixture<PagesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
