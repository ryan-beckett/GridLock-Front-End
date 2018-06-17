import {Component, Input, OnInit} from '@angular/core';
import {ServiceContract} from "./service-contract";
import {ServiceContractService} from "./service-contract.service";

declare var $: any;

@Component({
  selector: 'app-service-contract',
  templateUrl: './service-contract.component.html',
  styleUrls: ['./service-contract.component.css']
})
export class ServiceContractComponent implements OnInit {

  @Input() serviceContract: ServiceContract;

  constructor(private serviceContractService: ServiceContractService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#serviceContractFieldset").prop('disabled', false);
    $("#serviceContractUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#serviceContractFieldset").prop('disabled', true);
    $("#serviceContractUpdateBtn").prop("hidden", true);
    this.serviceContractService.updateServiceContract(this.serviceContract.id + "", this.serviceContract)
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
