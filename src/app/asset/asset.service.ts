import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Asset} from "./asset";

declare var $: any;

@Injectable()
export class AssetService {

  private ASSET_API = "//localhost:8080/api/assets/";

  constructor(private http: HttpClient) {
  }

  getAssets(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getAssetById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createAsset(asset: Asset): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateAsset(id: string, asset: Asset): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteAsset(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }

  getAssetsByName(name: string): Observable<any> {
    return this.http.get(this.ASSET_API + "name/" + name);
  }

  getAssetByQueryParams(params: {}): Observable<any> {
    return this.http.get(this.ASSET_API + "query/?" + $.param(params));
  }
}
