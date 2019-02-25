import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../user-details/user-details.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userName: String;
  userProfile: any;
  photos: any;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: UserDetailsService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
        params =>{
          this.userName = params['user'];
        }
    );
    this.getProfileData();
    this.getUserPhotos();
  }

  getProfileData() {
    this.service.profileData(this.userName).subscribe(
      data => {
        console.log('userDatils', data);
        this.userProfile = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getUserPhotos() {
    this.service.userPhotos(this.userName).subscribe(
      data => {
        console.log('photos', data);
        this.photos = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
