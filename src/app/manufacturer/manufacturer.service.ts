import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ManufacturerService {

  public ASSET_API = "//localhost:8080/api/manufacturers/";

  constructor(private http: HttpClient) {
  }

  getManufacturers(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

}
