import {Component, Input, OnInit} from '@angular/core';
import {NetworkConfiguration} from "./network-configuration";

declare var $: any;

@Component({
  selector: 'app-network-configuration',
  templateUrl: './network-configuration.component.html',
  styleUrls: ['./network-configuration.component.css']
})
export class NetworkConfigurationComponent implements OnInit {

  @Input() networkConfiguration: NetworkConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#networkConfigurationFieldset").prop('disabled', false);
    $("#networkConfigurationSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#networkConfigurationFieldset").prop('disabled', true);
    $("#networkConfigurationEditHref").prop("hidden", true);
    $("#networkConfigurationSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
