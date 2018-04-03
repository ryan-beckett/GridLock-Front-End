import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {NetworkConfiguration} from "./network-configuration";

@Injectable()
export class NetworkConfigurationService {

  private ASSET_API = "//localhost:8080/api/network-configurations/";

  constructor(private http: HttpClient) {
  }

  getNetworkConfigurations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getNetworkConfigurationById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createNetworkConfiguration(asset: NetworkConfiguration): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateNetworkConfiguration(id: string, asset: NetworkConfiguration): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteNetworkConfiguration(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
