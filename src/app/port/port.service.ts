import {Injectable} from '@angular/core';
import {Port} from "../asset/asset";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PortService {

  private ASSET_API = "//localhost:8080/api/ports/";

  constructor(private http: HttpClient) {
  }

  getPorts(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getPortById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createPort(asset: Port): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updatePort(id: string, asset: Port): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deletePort(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
