import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Role} from "./role";

@Injectable()
export class RoleService {

  private static API = "//localhost:8080/api/roles/";

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<any> {
    return this.http.get(RoleService.API);
  }

  getRoleById(id: string): Observable<any> {
    return this.http.get(RoleService.API + "id/" + id);
  }

  createRole(role: Role): Observable<any> {
    return this.http.post(RoleService.API, JSON.stringify(role));
  }

  updateRole(id: string, role: Role): Observable<any> {
    return this.http.put(RoleService.API + "id/" + id, JSON.stringify(role));
  }

  deleteRole(id: string): Observable<any> {
    return this.http.delete(RoleService.API + "id/" + id);
  }
}
