import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-video-info',
  templateUrl: './display-video-info.component.html',
  styleUrls: ['./display-video-info.component.css']
})
export class DisplayVideoInfo implements OnInit {
  submitForm: FormGroup;
  id: string;
  match: boolean = null;

  constructor(
    public fb: FormBuilder) {
   }

  ngOnInit(): void {

  }

}