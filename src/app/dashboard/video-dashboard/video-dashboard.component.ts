import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoLoaderService } from '../video-loader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent {
  selectedVideo: Observable<string>;
  videoList: Observable<Video[]>;

  constructor(vls: VideoLoaderService, route: ActivatedRoute) {
    this.videoList = vls.getVideos();

    this.selectedVideo = route.queryParams.pipe(
      map(params => params['id'])
    );
  }

  applyFilter(filter: string) {
    console.log(filter);
  }

}
