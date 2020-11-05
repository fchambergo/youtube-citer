import { Component, OnInit } from '@angular/core';
import { YoutubeDataAPI } from '../shared/youtube-data-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YoutubeVideoData } from '../shared/youtube-video-data.model';
import { CitationStylesService } from '../shared/citation-styles.service';
import { CitationStyles } from '../shared/citation-styles.model';
import moment from 'moment';
import { RegexService } from '../shared/regex-service.helper';

@Component({
  selector: 'app-citation-form',
  templateUrl: './citation-form.component.html',
  styleUrls: ['./citation-form.component.css']
})
export class CitationFormComponent implements OnInit {
  submitForm: FormGroup;
  videoData: YoutubeVideoData = new YoutubeVideoData();
  citationStyles: CitationStyles[];
  id: string;
  link: string;
  match: boolean = null;
  citation: string;
  style: string;

  constructor(public service: YoutubeDataAPI,
    public citationService: CitationStylesService,
    public regexService: RegexService,
    public fb: FormBuilder) {
   }

  onSubmit() {
    if(this.submitForm.invalid) {
      return;
    }
    this.match = this.regexService.isValidURL(this.submitForm.value.link);

    if(this.match == false){
      return;
    }
    this.id = this.findVideoId(this.submitForm.value.link);
    this.style = this.submitForm.value.citationStyle;
    console.log(this.submitForm)
    this.getVideoInfo(this.id);
  }

  getVideoInfo(id: string){
    this.service.getVideoInfo(id).subscribe(info => {
      this.videoData = info;      
    },
    (error) => {
      console.log(error);
    },
    () => {
      this.videoData.lastAccessed = new Date;
      this.videoData.contentDetails.duration = this.getTimestamp(moment.duration(this.videoData.contentDetails.duration).asMilliseconds());
      this.videoData.link = this.submitForm.value.link;
      this.getCitation(this.submitForm.value.citationStyle);
    }
    )
  }

  getCitationStyles(){
    this.citationStyles = this.citationService.getCitationStyles();
  }

  private createForm(){
    this.submitForm = this.fb.group({
      citationStyle: [null, Validators.required],
      link: [null, Validators.required]
    });
  }

    //This method finds the video id from the url link using regex
  private findVideoId(url: string): string {
    var id: string = "";

    //find whether the regex finds a match in the given url link
    let result = this.regexService.findResult(url);
    id = result[result.length - 1];
    return id;
  }

  private getTimestamp(milliseconds: number){
    var minutesStr: string;
    var secondsStr: string;

    var seconds = Math.floor(milliseconds / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = 0;
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes = minutes - (hours * 60);
      minutesStr = (minutes >= 10) ? minutes.toString() : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60) - 1;
    secondsStr = (seconds >= 10) ? seconds.toString() : "0" + seconds;
    if (hours != 0) {
      return hours + ":" + minutesStr + ":" + secondsStr;
    }
    return minutes + ":" + secondsStr;
  }

  getCitation(style: string) {
    this.citation = this.citationService.getCitationStyleFormat(style, this.videoData);
  }

  ngOnInit(): void {
    this.citationService.loadCitationStyles();
    this.getCitationStyles();
    this.createForm();
  }

}