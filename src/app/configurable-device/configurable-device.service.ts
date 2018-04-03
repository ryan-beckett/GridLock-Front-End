import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {ConfigurableDevice} from "./configurable-device";

@Injectable()
export class ConfigurableDeviceService {

  private ASSET_API = "//localhost:8080/api/configurable-devices/";

  constructor(private http: HttpClient) {
  }

  getConfigurableDevices(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getConfigurableDeviceById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createConfigurableDevice(asset: ConfigurableDevice): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateConfigurableDevice(id: string, asset: ConfigurableDevice): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteConfigurableDevice(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
