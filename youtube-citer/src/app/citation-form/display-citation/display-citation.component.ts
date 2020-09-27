import { Component, Input, OnInit } from '@angular/core';
import { YoutubeVideoData } from 'src/app/shared/youtube-video-data.model';

@Component({
  selector: 'app-display-citation',
  templateUrl: './display-citation.component.html',
  styleUrls: ['./display-citation.component.css']
})
export class DisplayCitation implements OnInit {
  @Input() videoData: YoutubeVideoData;

  constructor() {
   }

  ngOnInit(): void {

  }

}