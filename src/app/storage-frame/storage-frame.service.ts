import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {StorageFrame} from "./storage-frame";

@Injectable()
export class StorageFrameService {

  private ASSET_API = "//localhost:8080/api/storage-frames/";

  constructor(private http: HttpClient) {
  }

  getStorageFrames(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getStorageFrameById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createStorageFrame(asset: StorageFrame): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateStorageFrame(id: string, asset: StorageFrame): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteStorageFrame(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
