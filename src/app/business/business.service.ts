import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BusinessService {

  public ASSET_API = "//localhost:8080/api/businesses/";

  constructor(private http: HttpClient) {
  }

  getBusinesses(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

}
