import {Component, Input, OnInit} from '@angular/core';
import {GridLocation} from "./grid-location";
import {GridLocationService} from "./grid-location.service";

declare var $: any;

@Component({
  selector: 'app-grid-location',
  templateUrl: './grid-location.component.html',
  styleUrls: ['./grid-location.component.css']
})
export class GridLocationComponent implements OnInit {

  @Input() gridLocation: GridLocation;

  constructor(private gridLocationService: GridLocationService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#gridLocationFieldset").prop('disabled', false);
    $("#gridLocationUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#gridLocationFieldset").prop('disabled', true);
    $("#gridLocationUpdateBtn").prop("hidden", true);
    this.gridLocationService.updateGridLocation(this.gridLocation.id + "", this.gridLocation)
      .subscribe(resp => {
          $("#statusMessageDiv").prop("hidden", true);
          $("#statusMessageDiv").removeClass("alert-danger");
          $("#statusMessageDiv").addClass("alert-success");
          $("#statusMessage").text("Update success!");
          $("#statusMessageDiv").prop("hidden", false);
        },
        error => {
          $("#statusMessageDiv").prop("hidden", true);
          $("#statusMessageDiv").removeClass("alert-success");
          $("#statusMessageDiv").addClass("alert-danger");
          $("#statusMessage").text("Update failed!");
          $("#statusMessageDiv").prop("hidden", false);
        });
  }

}
