import {Component, Input, OnInit} from '@angular/core';
import {RackableDevice} from "./rackable-device";
import {RackableDeviceService} from "./rackable-device.service";

declare var $: any;

@Component({
  selector: 'app-rackable-device',
  templateUrl: './rackable-device.component.html',
  styleUrls: ['./rackable-device.component.css']
})
export class RackableDeviceComponent implements OnInit {

  @Input() rackableDevice: RackableDevice;

  constructor(private rackableDeviceService: RackableDeviceService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#rackableDeviceFieldset").prop('disabled', false);
    $("#rackableDeviceUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#rackableDeviceFieldset").prop('disabled', true);
    $("#rackableDeviceUpdateBtn").prop("hidden", true);
    this.rackableDeviceService.updateRackableDevice(this.rackableDevice.id + "", this.rackableDevice)
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
