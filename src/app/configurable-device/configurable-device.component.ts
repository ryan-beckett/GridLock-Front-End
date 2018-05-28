import {Component, Input, OnInit} from '@angular/core';
import {ConfigurableDevice} from "./configurable-device";

@Component({
  selector: 'app-configurable-device',
  templateUrl: './configurable-device.component.html',
  styleUrls: ['./configurable-device.component.css']
})
export class ConfigurableDeviceComponent implements OnInit {

  @Input() configurableDevice: ConfigurableDevice;

  constructor() {
  }

  ngOnInit() {
  }

}
