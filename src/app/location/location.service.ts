import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Location} from "./location"

@Injectable()
export class LocationService {

  private ASSET_API = "//localhost:8080/api/locations/";

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getLocationById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createLocation(asset: Location): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateLocation(id: string, asset: Location): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteLocation(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
