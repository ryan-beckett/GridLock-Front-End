import {Component, Input, OnInit} from '@angular/core';
import {Configuration} from "./configuration";

declare var $: any;

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  @Input() configuration: Configuration;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#configurationFieldset").prop('disabled', false);
    $("#configurationSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#configurationFieldset").prop('disabled', true);
    $("#configurationEditHref").prop("hidden", true);
    $("#configurationSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
