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

  constructor(
    private youtubeSearch: YoutubeSearchService
  ) {  }

  ngOnInit() {
    this.youtubeSearch.search('adora').subscribe((data: SearchResult[]) => {
      console.log(data.length);
    });
  }

}
