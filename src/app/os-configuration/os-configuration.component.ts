import {Component, Input, OnInit} from '@angular/core';
import {OSConfiguration} from "./os-configuration";

declare var $: any;

@Component({
  selector: 'app-osconfiguration',
  templateUrl: './os-configuration.component.html',
  styleUrls: ['./os-configuration.component.css']
})
export class OSConfigurationComponent implements OnInit {

  @Input() osConfiguration: OSConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#osConfigurationFieldset").prop('disabled', false);
    $("#osConfigurationSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#osConfigurationFieldset").prop('disabled', true);
    $("#osConfigurationEditHref").prop("hidden", true);
    $("#osConfigurationSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
