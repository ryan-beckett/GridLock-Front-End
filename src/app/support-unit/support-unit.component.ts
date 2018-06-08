import {Component, Input, OnInit} from '@angular/core';
import {SupportUnit} from "./support-unit";

declare var $: any;

@Component({
  selector: 'app-support-unit',
  templateUrl: './support-unit.component.html',
  styleUrls: ['./support-unit.component.css']
})
export class SupportUnitComponent implements OnInit {

  @Input() supportUnit: SupportUnit;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#supportUnitFieldset").prop('disabled', false);
    $("#supportUnitSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#supportUnitFieldset").prop('disabled', true);
    $("#supportUnitEditHref").prop("hidden", true);
    $("#supportUnitSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
