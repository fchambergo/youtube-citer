import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YoutubeVideoData } from 'src/app/shared/youtube-video-data.model';

@Component({
  selector: 'app-display-video-info',
  templateUrl: './display-video-info.component.html',
  styleUrls: ['./display-video-info.component.css']
})
export class DisplayVideoInfo implements OnInit {
  @Input() videoData: YoutubeVideoData;

  constructor() {
   }

  ngOnInit(): void {

  }

}