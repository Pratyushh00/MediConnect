import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-topic-chip',
    templateUrl: './topic-chip.html',
    styleUrls: ['./topic-chip.scss']
})
export class TopicChip {
    @Input() category: any;
}
