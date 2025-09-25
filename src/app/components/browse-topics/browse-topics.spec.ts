import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTopics } from './browse-topics';

describe('BrowseTopics', () => {
  let component: BrowseTopics;
  let fixture: ComponentFixture<BrowseTopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseTopics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseTopics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
