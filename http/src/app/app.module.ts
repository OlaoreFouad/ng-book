import { environment } from './../environments/environment';
import { YoutubeSearchService } from './services/youtube-search.service';
import { youtubeSearchInjectables } from './injectables/youtube-search.injectables';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: youtubeSearchInjectables,
  bootstrap: [AppComponent]
})
export class AppModule { }
