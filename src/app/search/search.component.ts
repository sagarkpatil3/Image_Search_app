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
  searchTerm = new Subject<String>();

  constructor(private searchService: SearchService, private router: Router,private sharedService: SharedService) {
    this.searchService.search(this.searchTerm).subscribe(
      data => {
        this.result = data['results'];
        this.sharedService.updateSearch(this.result);
        console.log(this.result);
      }
    );
   }

  ngOnInit() {
    this.router.navigate(['']);
  }

  // userInfo(username: any) {
  //   this.router.navigate(['details', username]);
  // }


}
