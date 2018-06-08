import {Component, Input, OnInit} from "@angular/core";
import {Location} from "./location";

declare var $: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() location: Location;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#locationFieldset").prop('disabled', false);
    $("#locationSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#locationFieldset").prop('disabled', true);
    $("#locationEditHref").prop("hidden", true);
    $("#locationSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }
}
