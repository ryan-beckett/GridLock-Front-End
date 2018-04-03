import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Rack} from "./rack";

@Injectable()
export class RackService {

  private ASSET_API = "//localhost:8080/api/racks/";

  constructor(private http: HttpClient) {
  }

  getRacks(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getRackById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createRack(asset: Rack): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateRack(id: string, asset: Rack): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteRack(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
