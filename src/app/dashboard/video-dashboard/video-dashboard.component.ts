import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoLoaderService } from '../video-loader.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo?: Video;
  videoList: Observable<Video[]>;

  constructor(vls: VideoLoaderService) {
    this.videoList = vls.getVideos().pipe(
      tap(videos => {
        this.selectedVideo = videos[0];
      }),
    );
  }

  ngOnInit() {
  }

}
