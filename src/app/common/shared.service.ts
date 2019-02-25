import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchData: any;
  search = new BehaviorSubject<any>('');

  constructor() {
    this.searchData;
    this.search.next(this.searchData);
   }

   updateSearch(data) {
     this.searchData = data;
     this.search.next(this.searchData);
   }
}
