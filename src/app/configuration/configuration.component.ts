import {Component, Input, OnInit} from '@angular/core';
import {Configuration} from "./configuration";
import {ConfigurationService} from "./configuration.service";

declare var $: any;

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  @Input() configuration: Configuration;

  constructor(private configurationService: ConfigurationService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#configurationFieldset").prop('disabled', false);
    $("#configurationUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#configurationFieldset").prop('disabled', true);
    $("#configurationUpdateBtn").prop("hidden", true);
    this.configurationService.updateConfiguration(this.configuration.id + "", this.configuration)
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
