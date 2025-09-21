import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarCard } from './webinar-card';

describe('WebinarCard', () => {
  let component: WebinarCard;
  let fixture: ComponentFixture<WebinarCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
