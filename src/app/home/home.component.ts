import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result: Object;
  searchTerm: any;

  constructor(private sharedService: SharedService, private router: Router) {
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
}
