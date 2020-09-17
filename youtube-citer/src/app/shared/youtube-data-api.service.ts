import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class YoutubeDataAPI {

  constructor(public http: HttpClient) { }

  API_KEY: string = "AIzaSyABqlR07Xv1sI89Mx-WdBB72-C8h2ucGiU";
  baseUrl: string = "https://www.googleapis.com/youtube/v3/videos";

  getVideoInfo(id: string) {
    let params = new HttpParams();
    params = params.set('part', 'snippet').set('id', id).set('key', this.API_KEY);

    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    });

    return this.http.get<any>(this.baseUrl + "?" + params, 
      { headers: headers }
      ).pipe(
          map(
            resp => resp.items[0].snippet as any
          ));
  }
}