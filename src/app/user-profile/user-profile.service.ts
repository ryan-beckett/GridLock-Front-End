import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "./user-profile";

@Injectable()
export class UserProfileService {

  private static API = "//localhost:8080/api/userProfiles/";

  constructor(private http: HttpClient) {
  }

  getUserProfiles(): Observable<any> {
    return this.http.get(UserProfileService.API);
  }

  getUserProfileById(id: string): Observable<any> {
    return this.http.get(UserProfileService.API + "id/" + id);
  }

  createUserProfile(userProfile: UserProfile): Observable<any> {
    return this.http.post(UserProfileService.API, JSON.stringify(userProfile));
  }

  updateUserProfile(id: string, userProfile: UserProfile): Observable<any> {
    return this.http.put(UserProfileService.API + "id/" + id, JSON.stringify(userProfile));
  }

  deleteUserProfile(id: string): Observable<any> {
    return this.http.delete(UserProfileService.API + "id/" + id);
  }
}
