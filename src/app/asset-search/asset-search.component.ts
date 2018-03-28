import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Manufacturer} from "../manufacturer/manufacturer";
import {BusinessUnit} from "../business-unit/business-unit";
import {Room} from "../room/room";
import {ManufacturerService} from "../manufacturer/manufacturer.service";
import {BusinessUnitService} from "../business-unit/business-unit.service";
import {RoomService} from "../room/room.service";
import {LocationService} from "../location/location.service";

declare var $: any;

@Component({
  selector: 'app-asset-search',
  templateUrl: './asset-search.component.html',
  styleUrls: ['./asset-search.component.css']
})

export class AssetSearchComponent implements OnInit {

  advancedSearchEnabled: boolean;
  name: string;
  id: string;
  serial: string;
  type: string;
  types: string[];
  status: string;
  statuses: string[];
  manufacturer: Manufacturer;
  manufacturers: Manufacturer[];
  model: string;
  partNumber: string;
  description: string;
  location: Location;
  locations: Location[];
  room: Room;
  rooms: Room[];
  owner: BusinessUnit;
  owners: BusinessUnit[];

  constructor(private router: Router,
              private manufacturerService: ManufacturerService,
              private locationService: LocationService,
              private roomService: RoomService,
              private businessUnitService: BusinessUnitService) {
  }

  ngOnInit() {
    this.advancedSearchEnabled = false;
    this.types = ["RACK", "MAIN_FRAME", "STORAGE_FRAME", "STORAGE_DEVICE", "SERVER_DEVICE", "NETWORK_DEVICE", "DESKTOP_DEVICE"];
    this.statuses = ["NEW", "INSTALLED", "PRE_PRODUCTION", "PRODUCTION", "POST_PRODUCTION", "DECOMMISSIONED"];
    this.manufacturerService.getManufacturers()
      .subscribe(manufacturers => {
        this.manufacturers = manufacturers as Manufacturer[];
      });
    this.locationService.getLocations()
      .subscribe(locations => {
        this.locations = locations as Location[];
      });
    this.roomService.getRooms()
      .subscribe(rooms => {
        this.rooms = rooms as Room[];
      });
    this.businessUnitService.getBusinessUnits()
      .subscribe(owners => {
        this.owners = owners as BusinessUnit[];
      });
  }

  search(): void {
    if (!this.advancedSearchEnabled) {
      if (this.name == "")
        alert("Please enter some search text.");
      else {
        this.router.navigate(['/asset-table', "name", this.name]);
      }
    } else {
      let asset = {};
      this.router.navigate(['/asset-table/advanced', asset]);
    }
  }

  toggleAdvancedSearch(): void {
    this.advancedSearchEnabled = !this.advancedSearchEnabled;
  }
}
