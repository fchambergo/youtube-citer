import { Component, OnInit } from '@angular/core';
import { YoutubeDataAPI } from '../shared/youtube-data-api.service';

@Component({
  selector: 'app-citation-form',
  templateUrl: './citation-form.component.html',
  styleUrls: ['./citation-form.component.css']
})
export class CitationFormComponent implements OnInit {

  constructor(public service: YoutubeDataAPI) { }

  getVideoInfo(id: string){
    this.service.getVideoInfo(id).subscribe(info => {
      console.log(info);
    })
  }

  ngOnInit(): void {
    this.getVideoInfo("P3ZQKxZhAYA");
  }

}