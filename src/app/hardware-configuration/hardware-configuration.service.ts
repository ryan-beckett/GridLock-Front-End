import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {HardwareConfiguration} from "./hardware-configuration";

@Injectable()
export class HardwareConfigurationService {

  private ASSET_API = "//localhost:8080/api/hardware-configurations/";

  constructor(private http: HttpClient) {
  }

  getHardwareConfigurations(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getHardwareConfigurationById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createHardwareConfiguration(asset: HardwareConfiguration): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateHardwareConfiguration(id: string, asset: HardwareConfiguration): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteHardwareConfiguration(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
