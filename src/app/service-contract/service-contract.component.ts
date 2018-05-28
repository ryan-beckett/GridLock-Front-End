import {Component, Input, OnInit} from '@angular/core';
import {ServiceContract} from "./service-contract";

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

}
