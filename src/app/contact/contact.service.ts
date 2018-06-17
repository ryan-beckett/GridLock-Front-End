import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Contact} from "./contact";


@Injectable()
export class ContactService {

  private static API = "https://gridlock-backend.herokuapp.com/api/contacts/";

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<any> {
    return this.http.get(ContactService.API);
  }

  getContactById(id: string): Observable<any> {
    return this.http.get(ContactService.API + "id/" + id);
  }

  createContact(contact: Contact): Observable<any> {
    return this.http.post(ContactService.API, JSON.stringify(contact), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  updateContact(id: string, contact: Contact): Observable<any> {
    return this.http.put(ContactService.API + "id/" + id, JSON.stringify(contact), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  deleteContact(id: string): Observable<any> {
    return this.http.delete(ContactService.API + "id/" + id);
  }
}
