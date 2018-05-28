import {Component, Input, OnInit} from '@angular/core';
import {RackableDevice} from "./rackable-device";

@Component({
  selector: 'app-rackable-device',
  templateUrl: './rackable-device.component.html',
  styleUrls: ['./rackable-device.component.css']
})
export class RackableDeviceComponent implements OnInit {

  @Input() rackableDevice: RackableDevice;

  constructor() {
  }

  ngOnInit() {
  }

}
