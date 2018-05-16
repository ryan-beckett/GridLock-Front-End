import { Component, OnInit } from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Room} from "../room/room";
import {Site} from "../site/site";
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedCountry: string;
  selectedSite: string;
  selectedRoom: string;
  countries: string[];
  sites: string[];
  rooms: string[];
  map = new Map<string, Map<Site, Room[]>[]>();

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.getAllCountries()
      .subscribe(countries => {
        this.countries = countries as string[];
        this.selectedCountry = countries[0];
        countries.forEach(country => {
          const countryMapArr = [];
          this.map.set(country, countryMapArr);
          this.dashboardService.getSitesForCountry(country)
            .subscribe(sites => {
              sites.forEach(site => {
                const siteMap = new Map<Site, Room[]>();
                const siteRoomArr = [];
                siteMap.set(site, siteRoomArr);
                countryMapArr.push(siteMap);
                this.dashboardService.getRoomsForSite(site.name)
                  .subscribe(rooms => {
                    rooms.forEach(room => {
                      siteRoomArr.push(room);
                    });
                  });
              });
            });
        });
      });
    console.log(this.map.size);
    this.map.forEach((val, key, map) => {
      console.log(key+" "+val.length);
    });
  }

  switchCountry() {
  }

  switchSite() {

  }

  switchRoom() {

  }
}
