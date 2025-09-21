import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webinar-card',
  imports: [CommonModule],
  templateUrl: './webinar-card.html',
  styleUrl: './webinar-card.scss'
})
export class WebinarCard {
  @Input() webinar: any;

}
