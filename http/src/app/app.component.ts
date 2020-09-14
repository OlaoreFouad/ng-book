import { SearchResult } from './models/search-result.model';
import { YoutubeSearchService } from './services/youtube-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http';

  loading = false;
  results: SearchResult[] = [];

  constructor(
    private youtubeSearch: YoutubeSearchService
  ) {  }

  updateResults(results: SearchResult[]) {
    this.results = results;
    console.log(this.results);
  }

  ngOnInit() {
  }

}
