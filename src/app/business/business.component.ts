import {Component, Input, OnInit} from '@angular/core';
import {Business} from "./business";
import {BusinessService} from "./business.service";

declare var $: any;

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  @Input() business: Business;

  constructor(private businessService: BusinessService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#businessFieldset").prop('disabled', false);
    $("#businessUpdateBtn").prop("hidden", false);
    return false;
  }

  update() {
    $("#businessFieldset").prop('disabled', true);
    $("#businessUpdateBtn").prop("hidden", true);
    this.businessService.updateBusiness(this.business.id + "", this.business)
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
