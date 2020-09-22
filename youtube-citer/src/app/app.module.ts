import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CitationFormComponent } from './citation-form/citation-form.component';
import { YoutubeDataAPI } from './shared/youtube-data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayVideoInfo } from './citation-form/display-video-info/display-video-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CitationFormComponent,
    DisplayVideoInfo
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [YoutubeDataAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
