import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServerDevice} from "./server-device";
import {ServerDeviceService} from "./server-device.service";

declare var $: any;

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
    $('.nav-tabs').scrollingTabs({
      enableSwiping: true
    });
    $('.nav-tabs a').click(function(){
      $(".tab-content").animate({ scrollTop: 0 }, 600);
    });
  }

}
