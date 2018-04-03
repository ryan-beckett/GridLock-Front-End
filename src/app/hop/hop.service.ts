import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Hop} from "./hop";

@Injectable()
export class HopService {

  private ASSET_API = "//localhost:8080/api/hops/";

  constructor(private http: HttpClient) {
  }

  getHops(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getHopById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createHop(asset: Hop): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateHop(id: string, asset: Hop): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteHop(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
