import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Manufacturer} from "../manufacturer/manufacturer";
import {BusinessUnit} from "../business-unit/business-unit";
import {Room} from "../room/room";
import {ManufacturerService} from "../manufacturer/manufacturer.service";
import {BusinessUnitService} from "../business-unit/business-unit.service";
import {RoomService} from "../room/room.service";
import {LocationService} from "../location/location.service";
import {AssetService} from "../asset/asset.service";

declare var $: any;

@Component({
  selector: 'app-asset-search',
  templateUrl: './asset-search.component.html',
  styleUrls: ['./asset-search.component.css']
})

export class AssetSearchComponent implements OnInit, AfterViewChecked {

  activeSpinnerId: string;
  advancedSearchEnabled: boolean;
  assets: Array<any>;

  name: string;
  id: string;
  serial: string;
  type: string;
  types: string[];
  status: string;
  statuses: string[];
  manufacturer: string;
  manufacturers: Manufacturer[];
  model: string;
  partNumber: string;
  description: string;
  location: string;
  locations: Location[];
  room: string;
  rooms: Room[];
  owner: string;
  owners: BusinessUnit[];

  constructor(private router: Router,
              private manufacturerService: ManufacturerService,
              private locationService: LocationService,
              private roomService: RoomService,
              private businessUnitService: BusinessUnitService,
              private assetService: AssetService) {
  }

  ngOnInit() {
    this.activeSpinnerId = "spinner";
    this.advancedSearchEnabled = false;
    this.id = "";
    this.name = "main-frame";
    this.serial = "";
    this.type = "";
    this.status = "";
    this.manufacturer = "";
    this.model = "";
    this.partNumber = "";
    this.description = "";
    this.location = "";
    this.room = "";
    this.owner = "";
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

  ngAfterViewChecked(): void {
    if (!$.fn.dataTable.isDataTable('#asset-table')) {
      $('#asset-table').DataTable({
        "order": [[0, "asc"]]
      });
    }
  }

  search(): void {
    if (!this.advancedSearchEnabled && this.name.trim() == "")
      alert("Please enter some search text.");
    else {
      $("#"+this.activeSpinnerId).show();
      $('#asset-table').dataTable().fnDestroy();
      this.assets = undefined;
      let params = {
        id: this.id, name: this.name, serial: this.serial,
        type: this.type, status: this.status, manufacturer: this.manufacturer,
        model: this.model, partNumber: this.partNumber, description: this.description,
        location: this.location, room: this.room, owner: this.owner
      };
      this.assetService.getAssetByQueryParams(params).subscribe(data => {
        this.assets = data;
        $("#"+this.activeSpinnerId).hide();
      });
      $("#searchBtn").removeClass("glow-button");
    }
  }

  toggleAdvancedSearch(): void {
    this.advancedSearchEnabled = !this.advancedSearchEnabled;
    if (this.advancedSearchEnabled) {
      this.name = "";
      $("#basic").addClass("collapse");
      this.activeSpinnerId = "advancedSpinner";
    } else {
      $("#basic").removeClass("collapse");
      this.activeSpinnerId = "spinner";
    }
  }
}
