import {Component, Input, OnInit} from '@angular/core';
import {NetworkConfiguration} from "./network-configuration";

@Component({
  selector: 'app-network-configuration',
  templateUrl: './network-configuration.component.html',
  styleUrls: ['./network-configuration.component.css']
})
export class NetworkConfigurationComponent implements OnInit {

  @Input() networkConfiguration: NetworkConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

}
