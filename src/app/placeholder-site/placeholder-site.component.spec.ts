import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSiteComponent } from './placeholder-site.component';

describe('PlaceholderSiteComponent', () => {
  let component: PlaceholderSiteComponent;
  let fixture: ComponentFixture<PlaceholderSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
