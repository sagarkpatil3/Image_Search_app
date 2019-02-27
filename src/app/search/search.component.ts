import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from './search.service';
import { Router } from '@angular/router';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: Object;
  searchTerm: any;
  myPhotosList = [];
  pagenumber = 1;
  constructor(private searchService: SearchService, private router: Router,private sharedService: SharedService) {
    this.search();
   }

  search() {
    this.searchService.search(this.searchTerm, this.pagenumber).subscribe(
      data => {
        this.myPhotosList = [];
        this.result = data['results'];
        this.myPhotosList.push(data['results']);
        this.sharedService.updateSearch(this.myPhotosList);
        console.log(this.result);
      }
    );
  }

  scroll(page) {
    this.searchService.search(this.searchTerm, page).subscribe(
      data => {
        this.result = data['results'];
        this.myPhotosList.push(data['results']);
        this.sharedService.updateSearch(this.myPhotosList);
        console.log(this.result);
      }
    );
  }

  ngOnInit() {
    this.router.navigate(['']);
  }


}
