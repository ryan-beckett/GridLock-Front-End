import {Component, Input, OnInit} from '@angular/core';
import {NetworkConfiguration} from "./network-configuration";
import {NetworkConfigurationService} from "./network-configuration.service";

declare var $: any;

@Component({
  selector: 'app-network-configuration',
  templateUrl: './network-configuration.component.html',
  styleUrls: ['./network-configuration.component.css']
})
export class NetworkConfigurationComponent implements OnInit {

  @Input() networkConfiguration: NetworkConfiguration;

  constructor(private networkConfigurationService: NetworkConfigurationService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#networkConfigurationFieldset").prop('disabled', false);
    $("#networkConfigurationUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#networkConfigurationFieldset").prop('disabled', true);
    $("#networkConfigurationUpdateBtn").prop("hidden", true);
    this.networkConfigurationService.updateNetworkConfiguration(this.networkConfiguration.id + "", this.networkConfiguration)
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
