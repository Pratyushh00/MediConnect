import { Component } from '@angular/core';
import { WebinarCard } from '../../components/webinar-card/webinar-card';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { SpeakerCard } from '../../speaker-card/speaker-card';
import { TopicChip } from '../../topic-chip/topic-chip';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [WebinarCard, CommonModule, Navbar, SpeakerCard, TopicChip]
})
export class Dashboard {
  webinars = [
    {
      image: 'assets/images/image.png',
      attendees: '200+',
      duration: '24:50',
      credits: 2,
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthma from',
      org: 'PDGI Indonesia',
      orgLogo: 'assets/pdgi.png',
      highlights: 'Manage chronic and complex diseases',
      expiry: null
    },
    {
      image: 'assets/images/claudio',
      attendees: '200+',
      duration: '24:50',
      credits: 1.5,
      title: 'Virus is like any other respiratory virus that causes common',
      org: 'GSK',
      orgLogo: 'assets/gsk.png',
      highlights: 'Manage chronic and complex diseases',
      expiry: '23h 30m'
    },
    {
      image: 'assets/images/rose',
      attendees: '200+',
      duration: '24:50',
      credits: 2,
      title: 'Virus is like any other respiratory virus that causes common',
      org: 'Bayer',
      orgLogo: 'assets/bayer.png',
      highlights: 'Manage chronic and complex diseases',
      expiry: null
    }
  ];

  speakers = [
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    },
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    },
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    },
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    },
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    },
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    },
    {
      name: 'Dr Chong wui',
      title: 'Gastrologist',
      image: ''
    }
  ]

  categories = [
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency Medicine', count: 8 }
  ];
}
