import {Component, Input, OnInit} from '@angular/core';
import {OSConfiguration} from "./os-configuration";
import {OSConfigurationService} from "./os-configuration.service";

declare var $: any;

@Component({
  selector: 'app-osconfiguration',
  templateUrl: './os-configuration.component.html',
  styleUrls: ['./os-configuration.component.css']
})
export class OSConfigurationComponent implements OnInit {

  @Input() osConfiguration: OSConfiguration;

  constructor(private osConfigurationService: OSConfigurationService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#osConfigurationFieldset").prop('disabled', false);
    $("#osConfigurationUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#osConfigurationFieldset").prop('disabled', true);
    $("#osConfigurationUpdateBtn").prop("hidden", true);
    this.osConfigurationService.updateOSConfiguration(this.osConfiguration.id + "", this.osConfiguration)
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
