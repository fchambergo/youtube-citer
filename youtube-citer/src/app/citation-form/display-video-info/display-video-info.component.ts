import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { YoutubeVideoData } from 'src/app/shared/youtube-video-data.model';

@Component({
  selector: 'app-display-video-info',
  templateUrl: './display-video-info.component.html',
  styleUrls: ['./display-video-info.component.css']
})
export class DisplayVideoInfo implements OnInit, OnChanges {
  @Input() videoData: YoutubeVideoData;

  constructor() {
   }

  ngOnInit(): void {

  }

  ngOnChanges(){
  }

}