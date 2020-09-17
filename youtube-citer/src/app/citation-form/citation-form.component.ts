import { Component, OnInit } from '@angular/core';
import { YoutubeDataAPI } from '../shared/youtube-data-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YoutubeVideoData } from '../shared/youtube-video-data.model';

@Component({
  selector: 'app-citation-form',
  templateUrl: './citation-form.component.html',
  styleUrls: ['./citation-form.component.css']
})
export class CitationFormComponent implements OnInit {
  submitForm: FormGroup;
  videoData: YoutubeVideoData;

  constructor(public service: YoutubeDataAPI,
    public fb: FormBuilder) {
   }

  getVideoInfo(id: string){
    this.service.getVideoInfo(id).subscribe(info => {
      this.videoData = info;
      console.log(this.videoData);
      
    })
  }

  onSubmit() {
    console.log(this.submitForm.value);
  }

  private createForm(){
    this.submitForm = this.fb.group({
      citationStyle: [null, Validators.required],
      link: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getVideoInfo("P3ZQKxZhAYA");
    this.createForm();
  }

}