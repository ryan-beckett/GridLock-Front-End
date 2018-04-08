import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {OSConfiguration} from "./os-configuration";
import {OSConfiguration} from "../osConfiguration/osConfiguration";

@Injectable()
export class OSConfigurationService {

  private static API = "//localhost:8080/api/os-configurations/";

  constructor(private http: HttpClient) {
  }

  getOSConfigurations(): Observable<any> {
    return this.http.get(OSConfigurationService.API);
  }

  getOSConfigurationById(id: string): Observable<any> {
    return this.http.get(OSConfigurationService.API + "id/" + id);
  }

  createOSConfiguration(osConfiguration: OSConfiguration): Observable<any> {
    return this.http.post(OSConfigurationService.API, JSON.stringify(osConfiguration));
  }

  updateOSConfiguration(id: string, osConfiguration: OSConfiguration): Observable<any> {
    return this.http.put(OSConfigurationService.API + "id/" + id, JSON.stringify(osConfiguration));
  }

  deleteOSConfiguration(id: string): Observable<any> {
    return this.http.delete(OSConfigurationService.API + "id/" + id);
  }
}
