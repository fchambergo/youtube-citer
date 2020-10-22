import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CitationStyles } from './citation-styles.model';
import { YoutubeVideoData } from './youtube-video-data.model';

@Injectable({ providedIn: 'root'})
export class CitationStylesService {
  citationStyles: CitationStyles[] = [];
  videoData: YoutubeVideoData;

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

  getCitationStyleFormat(citation: string, videoData: YoutubeVideoData, link: string) {
    switch(citation) {
      case "MLA":
        return `${this.videoData?.snippet?.title} . Youtube, uploaded by ${this.videoData?.snippet?.channelTitle}, ${this.videoData?.snippet?.publishedAt}, ${link}`;
      case "APA":
        return `${this.videoData?.snippet?.channelTitle}. (${this.videoData?.snippet?.publishedAt}). ${this.videoData?.snippet?.title} [Video file]. Retrieved from ${link}`;
      case "Chicago":
        return `"${this.videoData?.snippet?.title}," Youtube video, ${this.videoData?.contentDetails?.duration }, posted by "${this.videoData?.snippet?.channelTitle}," ${this.videoData?.snippet?.publishedAt}, ${link}`
      case "Harvard":
        return `${this.videoData?.snippet?.title} (${this.videoData?.snippet?.publishedAt}) Youtube video, added by ${this.videoData?.snippet?.channelTitle} [Online]. Available at ${link} [Accessed today]`
    }
  }
}