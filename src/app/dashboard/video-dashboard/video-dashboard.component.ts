import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { pluck, switchMap, share, filter } from 'rxjs/operators';

import { Video } from '../../app-types';
import { VideoLoaderService } from '../video-loader.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.scss']
})
export class VideoDashboardComponent {
  selectedVideo: Observable<Video>;
  videoList: Observable<Video[]>;

  constructor(vls: VideoLoaderService, route: ActivatedRoute) {
    this.videoList = vls.getVideos();

    this.selectedVideo = route.queryParams.pipe(
      pluck<Params, string>('id'),
      filter(id => !!id),
      switchMap(id => vls.getVideo(id)),
      share()
    );
  }

  applyFilter(filterProp: string) {
    console.log(filterProp);
  }

}
