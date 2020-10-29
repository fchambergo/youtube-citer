import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, zip } from 'rxjs';
import { YoutubeVideoData } from './youtube-video-data.model';

@Injectable({ providedIn: 'root'})
export class YoutubeDataAPI {

  constructor(public http: HttpClient) { }

  API_KEY: string = environment.API_KEY;
  baseUrl: string = "https://www.googleapis.com/youtube/v3/videos";

  getVideoInfo(id: string): Observable<YoutubeVideoData> {
    let params = new HttpParams();
    params = params.set('part', 'snippet').append('part', 'contentDetails').set('id', id).set('key', this.API_KEY);

    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    });

    return this.http.get<any>(this.baseUrl + "?" + params, 
      { headers: headers }
      ).pipe(
          map(
            (resp: any) => resp.items[0]
          ));
  }
}