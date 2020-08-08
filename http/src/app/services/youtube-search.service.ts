import { SearchResult } from './../models/search-result.model';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject('YOUTUBE_API_KEY')  private apiKey: string,
    @Inject('YOUTUBE_API_URL') private apiUrl: string
  ) { }

  search(query: string): Observable<SearchResult[]> {
    const params = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    return this.http.get(this.apiUrl + `?${ params }`).pipe(
      map(items => {
        console.log(items);
        return null;
      })
    );

  }

}

