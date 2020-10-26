import { Component, OnInit } from '@angular/core';
import { YoutubeDataAPI } from '../shared/youtube-data-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YoutubeVideoData } from '../shared/youtube-video-data.model';
import { CitationStylesService } from '../shared/citation-styles.service';
import { CitationStyles } from '../shared/citation-styles.model';
import { BehaviorSubject } from 'rxjs';

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
  isLoading: boolean = false;

  constructor(public service: YoutubeDataAPI,
    public citationService: CitationStylesService,
    public fb: FormBuilder) {
   }

  onSubmit() {
    if(this.submitForm.valid){
      this.id = this.findVideoId(this.submitForm.value.link);
      this.style = this.submitForm.value.citationStyle;
      this.getVideoInfo(this.id);
    }
  }

  getVideoInfo(id: string){
    this.isLoading = true;;
    this.service.getVideoInfo(id).subscribe(info => {
      this.videoData = info;      
    },
    (error) => {
      console.log(error);
    },
    () => {
      this.videoData.lastAccessed = new Date;
      this.videoData.link = this.submitForm.value.link;
      this.getCitation(this.submitForm.value.citationStyle);
      this.isLoading = false;
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
    //regex setup
    const regexString: string = "^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*";
    var regex = new RegExp(regexString);

    var id: string = "";

    //find whether the regex finds a match in the given url link
    if(regex.test(url)){
      this.match = true;
      let result = regex.exec(url);
      id = result[result.length - 1];
    } else {
      this.match = false;
    }

    return id;
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