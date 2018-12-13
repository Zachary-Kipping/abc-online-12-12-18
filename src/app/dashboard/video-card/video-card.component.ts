import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video?: Video;
  @Input() selected?: boolean;
  @Output() videoSelect = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {

  }

  videoClicked() {
    if (this.video) {
      this.videoSelect.emit(this.video);
    }
  }

}
