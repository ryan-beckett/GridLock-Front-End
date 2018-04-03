import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {OSConfiguration} from "./os-configuration";

@Injectable()
export class OSConfigurationService {

  private ASSET_API = "//localhost:8080/api/os-configurations/";

  constructor(private http: HttpClient) {
  }

  getOSConfigurations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getOSConfigurationById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createOSConfiguration(asset: OSConfiguration): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateOSConfiguration(id: string, asset: OSConfiguration): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteOSConfiguration(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
