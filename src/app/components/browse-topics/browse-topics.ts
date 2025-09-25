// browse-topics.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Topic {
  id: string;
  name: string;
  count: number;
  category?: string;
}

@Component({
  selector: 'app-browse-topics',
  templateUrl: './browse-topics.html',
  styleUrls: ['./browse-topics.scss'],
  imports: [CommonModule]
})
export class BrowseTopics implements OnInit {

  @Output() topicSelected = new EventEmitter<Topic>();
  @Output() viewAllClicked = new EventEmitter<void>();

  topics: Topic[] = [
    { id: '1', name: 'Cardiologist', count: 4, category: 'medical' },
    { id: '2', name: 'Emergency', count: 2, category: 'medical' },
    { id: '3', name: 'General Medicine', count: 9, category: 'medical' },
    { id: '4', name: 'General Medicine', count: 6, category: 'medical' },
    { id: '5', name: 'Emergency Medicine', count: 8, category: 'medical' },
    { id: '6', name: 'General Medicine', count: 4, category: 'medical' },
    { id: '7', name: 'Emergency', count: 7, category: 'medical' },
    { id: '8', name: 'Emergency Medicine', count: 8, category: 'medical' },
    { id: '9', name: 'Cardiologist', count: 4, category: 'medical' },
    { id: '10', name: 'General Medicine', count: 3, category: 'medical' },
    { id: '11', name: 'General Medicine', count: 4, category: 'medical' },
    { id: '12', name: 'Emergency', count: 2, category: 'medical' },
    { id: '13', name: 'Cardiologist', count: 4, category: 'medical' },
    { id: '14', name: 'Emergency Medicine', count: 5, category: 'medical' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTopicClick(topic: Topic): void {
    this.topicSelected.emit(topic);
    console.log('Topic selected:', topic);
  }

  onViewAllClick(): void {
    this.viewAllClicked.emit();
    console.log('View all topics clicked');
  }

  trackByTopicId(index: number, topic: Topic): string {
    return topic.id;
  }
}