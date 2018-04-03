import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {DesktopDevice} from "./desktop-device";

@Injectable()
export class DesktopDeviceService {

  private ASSET_API = "//localhost:8080/api/desktop-devices/";

  constructor(private http: HttpClient) {
  }

  getDesktopDevices(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getDesktopDeviceById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createDesktopDevice(asset: DesktopDevice): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateDesktopDevice(id: string, asset: DesktopDevice): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteDesktopDevice(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
