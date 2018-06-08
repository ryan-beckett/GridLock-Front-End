import {Component, Input, OnInit} from '@angular/core';
import {GridLocation} from "./grid-location";

declare var $: any;

@Component({
  selector: 'app-grid-location',
  templateUrl: './grid-location.component.html',
  styleUrls: ['./grid-location.component.css']
})
export class GridLocationComponent implements OnInit {

  @Input() gridLocation: GridLocation;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#gridLocationFieldset").prop('disabled', false);
    $("#gridLocationSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#gridLocationFieldset").prop('disabled', true);
    $("#gridLocationEditHref").prop("hidden", true);
    $("#gridLocationSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
