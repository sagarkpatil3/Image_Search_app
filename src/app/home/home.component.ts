import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';
import { Router } from '@angular/router';
import { SearchService } from '../search/search.service';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: any;
  searchTerm: any;
  pageNumber = 1;
  lastPage = 10;

  constructor(private searchComp:SearchComponent ,private searchService:SearchService, private sharedService: SharedService, private router: Router) {
  }

  ngAfterContentChecked(): void {
    this.result = this.sharedService.searchData;
    console.log('home', this.result);
  }

  ngOnInit() {
  }

  userInfo(username: any) {
    this.router.navigate(['user', username]);
  }

  onScroll() {
    this.pageNumber++;
    console.log('scrolled!!', this.pageNumber);
    if(this.lastPage > this.pageNumber){
      this.searchComp.scroll(this.pageNumber);      
    }
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

}
