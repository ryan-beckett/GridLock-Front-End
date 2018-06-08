import {Component, Input, OnInit} from '@angular/core';
import {HardwareConfiguration} from "./hardware-configuration";

declare var $: any;

@Component({
  selector: 'app-hardware-configuration',
  templateUrl: './hardware-configuration.component.html',
  styleUrls: ['./hardware-configuration.component.css']
})
export class HardwareConfigurationComponent implements OnInit {

  @Input() hardwareConfiguration: HardwareConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#hardwareConfigurationFieldset").prop('disabled', false);
    $("#hardwareConfigurationSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#hardwareConfigurationFieldset").prop('disabled', true);
    $("#hardwareConfigurationEditHref").prop("hidden", true);
    $("#hardwareConfigurationSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
