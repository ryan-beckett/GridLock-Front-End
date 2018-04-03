import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {GridLocation} from "./grid-location";

@Injectable()
export class GridLocationService {

  private ASSET_API = "//localhost:8080/api/grid-locations/";

  constructor(private http: HttpClient) {
  }

  getGridLocations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getGridLocationById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createGridLocation(asset: GridLocation): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateGridLocation(id: string, asset: GridLocation): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteGridLocation(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
