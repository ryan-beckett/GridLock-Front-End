import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactService {

  public ASSET_API = "//localhost:8080/api/contacts/";

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

}
