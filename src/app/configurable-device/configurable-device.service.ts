import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {ConfigurableDevice} from "./configurable-device";

@Injectable()
export class ConfigurableDeviceService {

  private static API = "//localhost:8080/api/configurable-devices/";

  constructor(private http: HttpClient) {
  }

  getConfigurableDevices(): Observable<any> {
    return this.http.get(ConfigurableDeviceService.API);
  }

  getConfigurableDeviceById(id: string): Observable<any> {
    return this.http.get(ConfigurableDeviceService.API + "id/" + id);
  }

  createConfigurableDevice(configurableDevice: ConfigurableDevice): Observable<any> {
    return this.http.post(ConfigurableDeviceService.API, JSON.stringify(configurableDevice));
  }

  updateConfigurableDevice(id: string, configurableDevice: ConfigurableDevice): Observable<any> {
    return this.http.put(ConfigurableDeviceService.API + "id/" + id, JSON.stringify(configurableDevice));
  }

  deleteConfigurableDevice(id: string): Observable<any> {
    return this.http.delete(ConfigurableDeviceService.API + "id/" + id);
  }
}
