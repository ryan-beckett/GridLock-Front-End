import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Permission} from "./permission";

@Injectable()
export class PermissionService {

  private ASSET_API = "//localhost:8080/api/permissions/";

  constructor(private http: HttpClient) {
  }

  getPermissions(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getPermissionById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createPermission(asset: Permission): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updatePermission(id: string, asset: Permission): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deletePermission(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
