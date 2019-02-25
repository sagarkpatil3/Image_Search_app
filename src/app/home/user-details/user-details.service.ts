import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private baseUrl = environment.baseUrl;
  private userAccessId = environment.userAccessId;
  private apiUrl = `${this.baseUrl}users/`;
  constructor(private Http: HttpClient) { }

  profileData(username) {
    return this.Http.get(this.apiUrl + username + `/?client_id=${this.userAccessId}`);
  }

  userPhotos(username) {
    return this.Http.get(this.apiUrl + username + `/photos?client_id=${this.userAccessId}`);
  }
}
