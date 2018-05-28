import {Component, Input, OnInit} from '@angular/core';
import {HardwareConfiguration} from "./hardware-configuration";

@Component({
  selector: 'app-hardware-configuration',
  templateUrl: './hardware-configuration.component.html',
  styleUrls: ['./hardware-configuration.component.css']
})
export class HardwareConfigurationComponent implements OnInit {

  @Input() hardwareConfiguration: HardwareConfiguration;

  constructor() {
  }

  ngOnInit() {
  }

}
