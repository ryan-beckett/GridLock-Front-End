import {Component, Input, OnInit} from '@angular/core';
import {Manufacturer} from "./manufacturer";
import {ManufacturerService} from "./manufacturer.service";

declare var $: any;

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input() manufacturer: Manufacturer;

  constructor(private manufacturerService: ManufacturerService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#manufacturerFieldset").prop('disabled', false);
    $("#manufacturerUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#manufacturerFieldset").prop('disabled', true);
    $("#manufacturerUpdateBtn").prop("hidden", true);
    this.manufacturerService.updateManufacturer(this.manufacturer.id + "", this.manufacturer)
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
