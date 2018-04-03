import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {NetworkDevice} from "./network-device";

@Injectable()
export class NetworkDeviceService {

  private ASSET_API = "//localhost:8080/api/network-devices/";

  constructor(private http: HttpClient) {
  }

  getNetworkDevices(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getNetworkDeviceById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createNetworkDevice(asset: NetworkDevice): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateNetworkDevice(id: string, asset: NetworkDevice): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteNetworkDevice(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
