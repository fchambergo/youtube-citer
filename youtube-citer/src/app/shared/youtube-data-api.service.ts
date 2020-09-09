import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root'})
export class YoutubeDataAPI {

  constructor(public http: HttpClient) { }

  API_KEY: string = "AIzaSyABqlR07Xv1sI89Mx-WdBB72-C8h2ucGiU";
  baseUrl: string = "https://www.googleapis.com/youtube/v3/";

  getVideoInfo(id: string) {
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    });

    return this.http.get<any>(this.baseUrl + 'videos?part=snippet&id=' + id + '&key=' + this.API_KEY, { headers: headers });
  }
}