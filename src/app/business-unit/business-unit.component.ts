import {Component, Input, OnInit} from '@angular/core';
import {BusinessUnit} from "./business-unit";

declare var $: any;

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit {

  @Input() businessUnit: BusinessUnit;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#businessUnitFieldset").prop('disabled', false);
    $("#businessUnitSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#businessUnitFieldset").prop('disabled', true);
    $("#businessUnitEditHref").prop("hidden", true);
    $("#businessUnitSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }
}
