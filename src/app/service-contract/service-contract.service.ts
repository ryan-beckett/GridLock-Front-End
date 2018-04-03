import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {ServiceContract} from "./service-contract";

@Injectable()
export class ServiceContractService {

  private ASSET_API = "//localhost:8080/api/service-contracts/";

  constructor(private http: HttpClient) {
  }

  getServiceContracts(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getServiceContractById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createServiceContract(asset: ServiceContract): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateServiceContract(id: string, asset: ServiceContract): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteServiceContract(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
