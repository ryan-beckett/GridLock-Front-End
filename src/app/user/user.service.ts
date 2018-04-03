import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable()
export class UserService {

  private ASSET_API = "//localhost:8080/api/users/";

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createUser(asset: User): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateUser(id: string, asset: User): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
