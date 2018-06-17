import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Business} from "../business/business";

@Injectable()
export class BusinessService {

  private static API = "https://gridlock-backend.herokuapp.com/api/businesses/";

  constructor(private http: HttpClient) {
  }

  getBusinesses(): Observable<any> {
    return this.http.get(BusinessService.API);
  }

  getBusinessById(id: string): Observable<any> {
    return this.http.get(BusinessService.API + "id/" + id);
  }

  createBusiness(business: Business): Observable<any> {
    return this.http.post(BusinessService.API, JSON.stringify(business), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  updateBusiness(id: string, business: Business): Observable<any> {
    return this.http.put(BusinessService.API + "id/" + id, JSON.stringify(business), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteBusiness(id: string): Observable<any> {
    return this.http.delete(BusinessService.API + "id/" + id);
  }
}
