import {Component, Input, OnInit} from '@angular/core';
import {RackableDevice} from "./rackable-device";

declare var $: any;

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

  edit(event) {
    $("#rackableDeviceFieldset").prop('disabled', false);
    $("#rackableDeviceSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#rackableDeviceFieldset").prop('disabled', true);
    $("#rackableDeviceEditHref").prop("hidden", true);
    $("#rackableDeviceSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
