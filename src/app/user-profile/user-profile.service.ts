import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "./user-profile";

@Injectable()
export class UserProfileService {

  private ASSET_API = "//localhost:8080/api/user-profiles/";

  constructor(private http: HttpClient) {
  }

  getUserProfiles(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getUserProfileById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createUserProfile(asset: UserProfile): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateUserProfile(id: string, asset: UserProfile): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteUserProfile(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
