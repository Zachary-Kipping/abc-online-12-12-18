import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videos?: Video[];

  @Input() selectedId?: string;

  constructor() {
  }

  ngOnInit() {

  }

}
