import { Component, OnInit } from '@angular/core';
import { YoutubeDataAPI } from '../shared/youtube-data-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YoutubeVideoData } from '../shared/youtube-video-data.model';
import { CitationStylesService } from '../shared/citation-styles.service';

@Component({
  selector: 'app-citation-form',
  templateUrl: './citation-form.component.html',
  styleUrls: ['./citation-form.component.css']
})
export class CitationFormComponent implements OnInit {
  submitForm: FormGroup;
  videoData: YoutubeVideoData;
  format: string;
  id: string;
  link: string;
  match: boolean = null;
  citation: string;

  constructor(public service: YoutubeDataAPI,
    public citationService: CitationStylesService,
    public fb: FormBuilder) {
   }

  onSubmit() {
    this.link = this.submitForm.value.link;
    this.id = this.findVideoId(this.submitForm.value.link);
    if(this.submitForm.valid){
      this.getVideoInfo(this.id);
      this.getCitation();
    }
    console.log(this.videoData);
  }

  getVideoInfo(id: string){
    this.service.getVideoInfo(id).subscribe(info => {
      this.videoData = info;
      this.citationService.videoData = info;
      console.log(this.videoData);
      
    })
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

  getCitation() {
    this.citation = this.citationService.getCitationStyleFormat("MLA", this.videoData, this.link);
  }

  ngOnInit(): void {
    this.createForm();
    this.citationService.loadCitationStyles();
  }

}