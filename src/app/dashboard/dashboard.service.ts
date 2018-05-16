import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

declare var $: any;

@Injectable()
export class DashboardService {

  private static COUNTRIES_API = "https://gridlock-backend.herokuapp.com/api/locations/countries";
  private static SITES_BY_COUNTRY_API = "https://gridlock-backend.herokuapp.com/api/sites/country/";
  private static ROOMS_BY_SITES_API = "https://gridlock-backend.herokuapp.com/api/rooms/site/";

  constructor(private http: HttpClient) {
  }

  getAllCountries(): Observable<any> {
    return this.http.get(DashboardService.COUNTRIES_API);
  }

  getSitesForCountry(country: string): Observable<any> {
    return this.http.get(DashboardService.SITES_BY_COUNTRY_API + encodeURIComponent(country));
  }

  getRoomsForSite(site: string): Observable<any> {
    return this.http.get(DashboardService.ROOMS_BY_SITES_API + encodeURIComponent(site));
  }
}
