import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Manufacturer} from "./manufacturer";

@Injectable()
export class ManufacturerService {

  private ASSET_API = "//localhost:8080/api/manufacturers/";

  constructor(private http: HttpClient) {
  }

  getManufacturers(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getManufacturerById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createManufacturer(asset: Manufacturer): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateManufacturer(id: string, asset: Manufacturer): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteManufacturer(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
