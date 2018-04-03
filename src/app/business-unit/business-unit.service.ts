import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {BusinessUnit} from "./business-unit";

@Injectable()
export class BusinessUnitService {

  private ASSET_API = "//localhost:8080/api/business-units/";

  constructor(private http: HttpClient) {
  }

  getBusinessUnits(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getBusinessUnitById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createBusinessUnit(asset: BusinessUnit): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateBusinessUnit(id: string, asset: BusinessUnit): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteBusinessUnit(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
