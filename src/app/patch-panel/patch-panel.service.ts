import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {PatchPanel} from "./patch-panel";

@Injectable()
export class PatchPanelService {

  private ASSET_API = "//localhost:8080/api/patch-panels/";

  constructor(private http: HttpClient) {
  }

  getPatchPanels(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getPatchPanelById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createPatchPanel(asset: PatchPanel): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updatePatchPanel(id: string, asset: PatchPanel): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deletePatchPanel(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
