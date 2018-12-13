import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video: Video;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
