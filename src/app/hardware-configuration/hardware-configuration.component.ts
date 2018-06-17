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
          $("#statusMessage").removeClass("alert-danger");
          $("#statusMessage").addClass("alert-success");
          $("#statusMessage").text("Update success!");
          $("#statusMessageDiv").prop("hidden", false);
        },
        error => {
          $("#statusMessage").removeClass("alert-success");
          $("#statusMessage").addClass("alert-danger");
          $("#statusMessage").text("Update failed!");
          $("#statusMessageDiv").prop("hidden", false);
        });
  }

}
