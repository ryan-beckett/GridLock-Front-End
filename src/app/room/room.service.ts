import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Room} from "./room";

@Injectable()
export class RoomService {

  private ASSET_API = "//localhost:8080/api/rooms/";

  constructor(private http: HttpClient) {
  }

  getRooms(): Observable<any> {
    return this.http.get(this.ASSET_API);
  }

  getRoomById(id: string): Observable<any> {
    return this.http.get(this.ASSET_API + "id/" + id);
  }

  createRoom(asset: Room): Observable<any> {
    return this.http.post(this.ASSET_API, JSON.stringify(asset));
  }

  updateRoom(id: string, asset: Room): Observable<any> {
    return this.http.put(this.ASSET_API + "id/" + id, JSON.stringify(asset));
  }

  deleteRoom(id: string): Observable<any> {
    return this.http.delete(this.ASSET_API + "id/" + id);
  }
}
