import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {SupportUnit} from "./support-unit";

@Injectable()
export class SupportUnitService {

  private ASSET_API = "//localhost:8080/api/support-units/";

  constructor(private http: HttpClient) {
  }

  getSupportUnits(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getSupportUnitById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createSupportUnit(asset: SupportUnit): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateSupportUnit(id: string, asset: SupportUnit): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteSupportUnit(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
