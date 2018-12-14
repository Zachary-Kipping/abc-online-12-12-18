import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
  @Input() video?: Video;
  @Input() selected?: boolean;

  constructor(private router: Router) { }

  videoClicked() {
    if (this.video) {
      const queryParams = { id: this.video.id };
      this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
    }
  }
}
