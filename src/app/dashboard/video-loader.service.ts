import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from '../app-types';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API_URL + '/videos')
      .pipe(
        map(videos => videos.map(video => ({
            ...video,
            title: video.title.toUpperCase()
          })
        ))
      );
  }

  getVideo(id: string): Observable<Video> {
    return this.http.get<Video>(API_URL + '/videos/' + id);
  }
}
