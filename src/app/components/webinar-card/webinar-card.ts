import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

export interface Webinar {
  id: string;
  title: string;
  credits: number;
  isExpiring?: boolean;
  expiringDays?: number;
  isLive?: boolean;
  viewers?: number;
  duration?: string;
  instructor: {
    name: string;
    organization: string;
    avatar: string;
  };
  thumbnail: string;
  keyHighlights: string[];
  scheduledDate?: Date;
  notifyMe?: boolean;
}

@Component({
  selector: 'app-webinar-card',
  imports: [CommonModule],
  templateUrl: './webinar-card.html',
  styleUrl: './webinar-card.scss'
})
export class WebinarCard implements OnInit {
  liveWebinars: Webinar[] = [
    {
      "id": "1",
      "title": "Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from",
      "credits": 2,
      "isLive": true,
      "viewers": 200,
      "duration": "24:50",
      "instructor": {
        "name": "PDGI Indonesia",
        "organization": "by PDGI Indonesia",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      },
      "thumbnail": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      "keyHighlights": [
        "Manage chronic and complex diseases"
      ]
    },
    {
      "id": "2",
      "title": "Virus is like any other respiratory virus that causes common",
      "credits": 1.5,
      "isExpiring": true,
      "expiringDays": 30,
      "isLive": true,
      "viewers": 200,
      "duration": "24:50",
      "instructor": {
        "name": "GSK",
        "organization": "by GSK",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      },
      "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      "keyHighlights": [
        "Manage chronic and complex diseases"
      ]
    },
    {
      "id": "3",
      "title": "Virus is like any other respiratory virus that causes common",
      "credits": 2,
      "isLive": true,
      "viewers": 200,
      "duration": "24:50",
      "instructor": {
        "name": "Bayer",
        "organization": "by Bayer",
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616c57c8e5f?w=40&h=40&fit=crop&crop=face"
      },
      "thumbnail": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=200&fit=crop",
      "keyHighlights": [
        "Manage chronic and complex diseases"
      ]
    }
  ];

  upcomingWebinars: Webinar[] = [
    {
      "id": "4",
      "title": "The Covid19 Management of Parox Health caretine",
      "credits": 1.5,
      "isExpiring": true,
      "expiringDays": 20,
      "instructor": {
        "name": "PDGI Indonesia",
        "organization": "by PDGI Indonesia",
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      },
      "thumbnail": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop",
      "keyHighlights": [
        "Manage chronic and complex diseases"
      ],
      "scheduledDate": new Date("2025-01-07T12:30:00Z"),
      "notifyMe": false
    },
    {
      "id": "5",
      "title": "Perspectives in The Covid19 Management of Parox Health",
      "credits": 2,
      "instructor": {
        "name": "PDGI Indonesia",
        "organization": "by PDGI Indonesia",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      },
      "thumbnail": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop",
      "keyHighlights": [
        "Manage chronic and complex diseases"
      ],
      "scheduledDate": new Date("2025-01-07T12:30:00Z"),
      "notifyMe": false
    },
    {
      "id": "6",
      "title": "The Covid19 Management of Parox Health caretine",
      "credits": 2,
      "instructor": {
        "name": "PDGI Indonesia",
        "organization": "by PDGI Indonesia",
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616c57c8e5f?w=40&h=40&fit=crop&crop=face"
      },
      "thumbnail": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
      "keyHighlights": [
        "Manage chronic and complex diseases"
      ],
      "scheduledDate": new Date("2025-01-07T12:30:00Z"),
      "notifyMe": false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onWatchNow(webinar: Webinar): void {
    console.log('Watch now clicked for:', webinar.title);
    // Implement watch now logic
  }

  onNotifyMe(webinar: Webinar): void {
    webinar.notifyMe = !webinar.notifyMe;
    console.log('Notify me toggled for:', webinar.title, webinar.notifyMe);
    // Implement notify me logic
  }

  onViewAll(section: string): void {
    console.log('View all clicked for:', section);
    // Implement view all logic
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

}
