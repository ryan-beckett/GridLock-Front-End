import {Component, Input, OnInit} from '@angular/core';
import {SupportUnit} from "./support-unit";
import {SupportUnitService} from "./support-unit.service";

declare var $: any;

@Component({
  selector: 'app-support-unit',
  templateUrl: './support-unit.component.html',
  styleUrls: ['./support-unit.component.css']
})
export class SupportUnitComponent implements OnInit {

  @Input() supportUnit: SupportUnit;

  constructor(private supportUnitService: SupportUnitService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#supportUnitFieldset").prop('disabled', false);
    $("#supportUnitUpdateBtn").prop("hidden", false);
    return false;
  }

  update() {
    $("#supportUnitFieldset").prop('disabled', true);
    $("#supportUnitUpdateBtn").prop("hidden", true);
    this.supportUnitService.updateSupportUnit(this.supportUnit.id + "", this.supportUnit)
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
