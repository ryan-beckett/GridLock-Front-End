import {Component, Input, OnInit} from '@angular/core';
import {Business} from "./business";

declare var $: any;

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  @Input() business: Business;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#businessFieldset").prop('disabled', false);
    $("#businessSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#businessFieldset").prop('disabled', true);
    $("#businessEditHref").prop("hidden", true);
    $("#businessSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }
}
