import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {RackableDevice} from "./rackable-device";

@Injectable()
export class RackableDeviceService {

  private ASSET_API = "//localhost:8080/api/rackable-devices/";

  constructor(private http: HttpClient) {
  }

  getRackableDevices(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getRackableDeviceById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createRackableDevice(asset: RackableDevice): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateRackableDevice(id: string, asset: RackableDevice): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteRackableDevice(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
