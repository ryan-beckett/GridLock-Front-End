import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Business} from "../business/business";

@Injectable()
export class BusinessService {

  private ASSET_API = "//localhost:8080/api/businesses/";

  constructor(private http: HttpClient) {
  }

  getBusinesses(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getBusinessById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createBusiness(asset: Business): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateBusiness(id: string, asset: Business): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteBusiness(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
