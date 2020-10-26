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

  getCitationStyleFormat(citation: string, videoData: YoutubeVideoData) {
    switch(citation) {
      case "MLA":
        return `${videoData?.snippet?.title} . Youtube, uploaded by ${videoData?.snippet?.channelTitle}, ${videoData?.snippet?.publishedAt}, ${videoData?.link}`;
      case "APA":
        return `${videoData?.snippet?.channelTitle}. (${videoData?.snippet?.publishedAt}). ${videoData?.snippet?.title} [Video file]. Retrieved from ${videoData?.link}`;
      case "Chicago":
        return `"${videoData?.snippet?.title}," Youtube video, ${videoData?.contentDetails?.duration }, posted by "${videoData?.snippet?.channelTitle}," ${videoData?.snippet?.publishedAt}, ${videoData?.link}`
      case "Harvard":
        return `${videoData?.snippet?.title} (${videoData?.snippet?.publishedAt}) Youtube video, added by ${videoData?.snippet?.channelTitle} [Online]. Available at ${videoData?.link} [Accessed today]`
    }
  }
}