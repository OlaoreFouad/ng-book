import { map, filter, debounceTime, switchAll } from 'rxjs/operators';
import { YoutubeSearchService } from './../../services/youtube-search.service';
import { SearchResult } from './../../models/search-result.model';
import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<SearchResult[]>();

  constructor(
    private youtube: YoutubeSearchService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    fromEvent<any>(this.el.nativeElement, 'keyup')
      .pipe(
        map(e => e.target.value),
        filter(value => (value as string).length > 1),
        debounceTime(250),
        map((value: string) => {
          this.loading.emit(true);
          return this.youtube.search(value);
        }),
        switchAll()
      ).subscribe(
        results => { // on results arrived
          this.loading.emit(false);
          this.results.emit(results);
        },
        error => { // on error
          console.error(error);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(true);
        }
      );
  }

}
