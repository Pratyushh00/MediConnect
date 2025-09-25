import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpeakers } from './top-speakers';

describe('TopSpeakers', () => {
  let component: TopSpeakers;
  let fixture: ComponentFixture<TopSpeakers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSpeakers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSpeakers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
