import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DesktopDeviceService} from "./desktop-device.service";
import {DesktopDevice} from "./desktop-device";

@Component({
  selector: 'app-desktop-device',
  templateUrl: './desktop-device.component.html',
  styleUrls: ['./desktop-device.component.css']
})
export class DesktopDeviceComponent implements OnInit {

  desktopDevice: DesktopDevice;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private desktopDeviceService: DesktopDeviceService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.desktopDeviceService.getDesktopDeviceById(id).subscribe(data => {
          this.desktopDevice = data as DesktopDevice;
        });
      }
    });
  }

  ngOnInit() {
  }

}
