import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServerDevice} from "./server-device";
import {ServerDeviceService} from "./server-device.service";

@Component({
  selector: 'app-server-device',
  templateUrl: './server-device.component.html',
  styleUrls: ['./server-device.component.css']
})
export class ServerDeviceComponent implements OnInit {

  serverDevice: ServerDevice;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverDeviceService: ServerDeviceService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.serverDeviceService.getServerDeviceById(id).subscribe(data => {
          this.serverDevice = data as ServerDevice;
        });
      }
    });
  }

  ngOnInit() {
  }

}
