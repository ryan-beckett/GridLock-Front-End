import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {MainFrame} from "./main-frame";

@Injectable()
export class MainFrameService {

  private ASSET_API = "//localhost:8080/api/main-frames/";

  constructor(private http: HttpClient) {
  }

  getMainFrames(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getMainFrameById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createMainFrame(asset: MainFrame): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateMainFrame(id: string, asset: MainFrame): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteMainFrame(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
