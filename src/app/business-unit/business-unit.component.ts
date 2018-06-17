import {Component, Input, OnInit} from '@angular/core';
import {BusinessUnit} from "./business-unit";
import {BusinessUnitService} from "./business-unit.service";

declare var $: any;

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit {

  @Input() businessUnit: BusinessUnit;

  constructor(private businessUnitService: BusinessUnitService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#businessUnitFieldset").prop('disabled', false);
    $("#businessUnitUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#businessUnitFieldset").prop('disabled', true);
    $("#businessUnitUpdateBtn").prop("hidden", true);
    this.businessUnitService.updateBusinessUnit(this.businessUnit.id + "", this.businessUnit)
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
