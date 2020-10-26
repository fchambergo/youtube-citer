import { Component, Input, OnInit } from '@angular/core';
import { CitationStylesService } from 'src/app/shared/citation-styles.service';
import { YoutubeDataAPI } from 'src/app/shared/youtube-data-api.service';
import { YoutubeVideoData } from 'src/app/shared/youtube-video-data.model';

@Component({
  selector: 'app-display-citation',
  templateUrl: './display-citation.component.html',
  styleUrls: ['./display-citation.component.css']
})
export class DisplayCitation implements OnInit {
  
  @Input() videoData: YoutubeVideoData;
  @Input() style: string;

  constructor() {
  }
  
  ngOnInit(): void {

  }

}