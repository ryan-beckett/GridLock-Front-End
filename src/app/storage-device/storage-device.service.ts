import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {StorageDevice} from "./storage-device";

@Injectable()
export class StorageDeviceService {

  private ASSET_API = "//localhost:8080/api/storage-devices/";

  constructor(private http: HttpClient) {
  }

  getStorageDevices(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getStorageDeviceById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createStorageDevice(asset: StorageDevice): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateStorageDevice(id: string, asset: StorageDevice): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteStorageDevice(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
