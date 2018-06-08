import {Component, Input, OnInit} from '@angular/core';
import {Manufacturer} from "./manufacturer";

declare var $: any;

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input() manufacturer: Manufacturer;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#manufacturerFieldset").prop('disabled', false);
    $("#manufacturerSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#manufacturerFieldset").prop('disabled', true);
    $("#manufacturerEditHref").prop("hidden", true);
    $("#manufacturerSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
