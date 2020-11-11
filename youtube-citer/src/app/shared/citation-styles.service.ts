import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CitationStyles } from './citation-styles.model';
import { YoutubeVideoData } from './youtube-video-data.model';

@Injectable({ providedIn: 'root'})
export class CitationStylesService {
  citationStyles: CitationStyles[] = [];

  constructor(public http: HttpClient) { }

  baseUrl: string = "assets/citation-styles.json";

  loadCitationStyles() {
    this.http.get(this.baseUrl).subscribe((data: any[]) =>{
      data.forEach(item => this.citationStyles.push(item));
      console.log(this.citationStyles);
    })
  }

  getCitationStyles() {
    return this.citationStyles;
  }
}