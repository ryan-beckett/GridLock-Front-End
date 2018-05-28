import {Component, Input, OnInit} from '@angular/core';
import {OSConfiguration} from "./os-configuration";

@Component({
  selector: 'app-osconfiguration',
  templateUrl: './os-configuration.component.html',
  styleUrls: ['./os-configuration.component.css']
})
export class OSConfigurationComponent implements OnInit {

  @Input() osConfiguration: OSConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

}
