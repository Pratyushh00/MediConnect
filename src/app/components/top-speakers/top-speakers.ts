import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Speaker {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
  isLive?: boolean;
  rating?: number;
  totalSessions?: number;
}

@Component({
  selector: 'app-top-speakers',
  imports: [CommonModule],
  templateUrl: './top-speakers.html',
  styleUrl: './top-speakers.scss'
})
export class TopSpeakers implements OnInit {
  @Output() speakerSelected = new EventEmitter<Speaker>();
  @Output() viewAllClicked = new EventEmitter<void>();

  topSpeakers: Speaker[] = [
    {
      id: '1',
      name: 'Dr Chong wui',
      specialty: 'Gastroenterologist, General Physician',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      isLive: true,
      rating: 4.8,
      totalSessions: 25
    },
    {
      id: '2',
      name: 'Dr Wuyama Gurang',
      specialty: 'Gastroenterologist, Surgeon',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      totalSessions: 32
    },
    {
      id: '3',
      name: 'Dr Wuyama Gurang',
      specialty: 'Gastroenterologist, Surgeon',
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face',
      rating: 4.7,
      totalSessions: 18
    },
    {
      id: '4',
      name: 'Dr Wuyama Gurang',
      specialty: 'Cardiologist',
      avatar: 'https://images.unsplash.com/photo-1594824475520-b7d56cc57c4d?w=200&h=200&fit=crop&crop=face',
      rating: 4.8,
      totalSessions: 28
    },
    {
      id: '5',
      name: 'Dr Shanya sujan',
      specialty: 'Orthodontist',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      rating: 4.6,
      totalSessions: 15
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSpeakerClick(speaker: Speaker): void {
    this.speakerSelected.emit(speaker);
    console.log('Speaker selected:', speaker);
  }

  onViewAllClick(): void {
    this.viewAllClicked.emit();
    console.log('View all speakers clicked');
  }

  trackBySpeakerId(index: number, speaker: Speaker): string {
    return speaker.id;
  }
}
