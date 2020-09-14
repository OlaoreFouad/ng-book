import { SearchResult } from './../../models/search-result.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
