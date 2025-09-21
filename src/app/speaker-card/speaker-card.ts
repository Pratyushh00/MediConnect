import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-speaker-card',
    templateUrl: './speaker-card.html',
    styleUrls: ['./speaker-card.scss'],
    imports: [CommonModule]
})
export class SpeakerCard {
    @Input() speaker: any;
}
