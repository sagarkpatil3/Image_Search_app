import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = environment.baseUrl;
  private accessId = environment.userAccessId;
  // private queryUrl = `/search/photos?client_id=${this.accessId}&page=1&query=`;
  private queryUrl = `/search/users?client_id=${this.accessId}&page=1&query=`;
  constructor(private http: HttpClient) { }

  search(terms: Observable<String>) {
    return terms.pipe(debounceTime(400)
    , distinctUntilChanged()
    , switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term) {
    return this.http.get(this.apiUrl + this.queryUrl + term ).pipe(map(res => res));
  }
}
