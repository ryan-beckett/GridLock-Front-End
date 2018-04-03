import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Role} from "./role";

@Injectable()
export class RoleService {

  private ASSET_API = "//localhost:8080/api/roles/";

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getRoleById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createRole(asset: Role): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateRole(id: string, asset: Role): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteRole(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
