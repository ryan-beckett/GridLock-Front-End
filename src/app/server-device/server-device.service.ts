import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {ServerDevice} from "./server-device";

@Injectable()
export class ServerDeviceService {

  private ASSET_API = "//localhost:8080/api/server-devices/";

  constructor(private http: HttpClient) {
  }

  getServerDevices(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getServerDeviceById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createServerDevice(asset: ServerDevice): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateServerDevice(id: string, asset: ServerDevice): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteServerDevice(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

}
