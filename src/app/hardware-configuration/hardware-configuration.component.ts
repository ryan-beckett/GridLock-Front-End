import {Component, Input, OnInit} from '@angular/core';
import {HardwareConfiguration} from "./hardware-configuration";
import {HardwareConfigurationService} from "./hardware-configuration.service";

declare var $: any;

@Component({
  selector: 'app-hardware-configuration',
  templateUrl: './hardware-configuration.component.html',
  styleUrls: ['./hardware-configuration.component.css']
})
export class HardwareConfigurationComponent implements OnInit {

  @Input() hardwareConfiguration: HardwareConfiguration;

  constructor(private hardwareConfigurationService: HardwareConfigurationService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#hardwareConfigurationFieldset").prop('disabled', false);
    $("#hardwareConfigurationUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#hardwareConfigurationFieldset").prop('disabled', true);
    $("#hardwareConfigurationUpdateBtn").prop("hidden", true);
    this.hardwareConfigurationService.updateHardwareConfiguration(this.hardwareConfiguration.id + "", this.hardwareConfiguration)
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
