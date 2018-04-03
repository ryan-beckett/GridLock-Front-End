import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Configuration} from "./configuration";

@Injectable()
export class ConfigurationService {

  private ASSET_API = "//localhost:8080/api/configurations/";

  constructor(private http: HttpClient) {
  }

  getConfigurations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getConfigurationById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createConfiguration(asset: Configuration): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateConfiguration(id: string, asset: Configuration): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteConfiguration(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
