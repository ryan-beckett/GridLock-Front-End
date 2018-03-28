import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocationService {

  public ASSET_API = "//localhost:8080/api/locations/";

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

}
