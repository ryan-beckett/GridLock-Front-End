import {Component, Input, OnInit} from "@angular/core";
import {Location} from "./location";
import {LocationService} from "./location.service";

declare var $: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: Location;

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#locationFieldset").prop('disabled', false);
    $("#locationUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#locationFieldset").prop('disabled', true);
    $("#locationUpdateBtn").prop("hidden", true);
    this.locationService.updateLocation(this.location.id + "", this.location)
      .subscribe(resp => {
          $("#statusMessage").removeClass("alert-danger");
          $("#statusMessage").addClass("alert-success");
          $("#statusMessage").text("Update success!");
          $("#statusMessageDiv").prop("hidden", false);
        },
        error => {
          $("#statusMessage").removeClass("alert-success");
          $("#statusMessage").addClass("alert-danger");
          $("#statusMessage").text("Update failed!");
          $("#statusMessageDiv").prop("hidden", false);
        });
  }
}
