import {Component, Input, OnInit} from '@angular/core';
import {ServiceContract} from "./service-contract";

declare var $: any;

@Component({
  selector: 'app-service-contract',
  templateUrl: './service-contract.component.html',
  styleUrls: ['./service-contract.component.css']
})
export class ServiceContractComponent implements OnInit {

  @Input() serviceContract: ServiceContract;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#serviceContractFieldset").prop('disabled', false);
    $("#serviceContractSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#serviceContractFieldset").prop('disabled', true);
    $("#serviceContractEditHref").prop("hidden", true);
    $("#serviceContractSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
