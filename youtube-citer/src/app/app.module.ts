import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CitationFormComponent } from './citation-form/citation-form.component';
import { YoutubeDataAPI } from './shared/youtube-data-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayVideoInfo } from './citation-form/display-video-info/display-video-info.component';
import { DisplayCitation } from './citation-form/display-citation/display-citation.component';
import { CitationStylesService } from './shared/citation-styles.service';
import { RegexService } from './shared/regex-service.helper';
import { CopyClipboardDirective } from './shared/copy-clipboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    CitationFormComponent,
    DisplayVideoInfo,
    DisplayCitation,
    CopyClipboardDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    CopyClipboardDirective
  ],
  providers: [YoutubeDataAPI, CitationStylesService, RegexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
