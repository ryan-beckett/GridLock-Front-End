import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {NetworkConnection} from "./network-connection";

@Injectable()
export class NetworkConnectionService {

  private ASSET_API = "//localhost:8080/api/network-connections/";

  constructor(private http: HttpClient) {
  }

  getNetworkConnections(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getNetworkConnectionById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createNetworkConnection(asset: NetworkConnection): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateNetworkConnection(id: string, asset: NetworkConnection): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteNetworkConnection(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
