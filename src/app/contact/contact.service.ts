import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Contact} from "./contact";

@Injectable()
export class ContactService {

  private ASSET_API = "//localhost:8080/api/contacts/";

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getContactById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createContact(asset: Contact): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateContact(id: string, asset: Contact): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
