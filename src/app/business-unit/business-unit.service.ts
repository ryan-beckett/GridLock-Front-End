import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BusinessUnitService {

  public ASSET_API = "//localhost:8080/api/business-units/";

  constructor(private http: HttpClient) {
  }

  getBusinessUnits(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

}
