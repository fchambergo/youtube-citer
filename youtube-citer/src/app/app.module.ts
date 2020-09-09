import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CitationFormComponent } from './citation-form/citation-form.component';
import { YoutubeDataAPI } from './shared/youtube-data-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CitationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [YoutubeDataAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
