import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NetworkDeviceService} from "./network-device.service";
import {NetworkDevice} from "./network-device";

declare var $: any;

@Component({
  selector: 'app-network-device',
  templateUrl: './network-device.component.html',
  styleUrls: ['./network-device.component.css']
})
export class NetworkDeviceComponent implements OnInit {

  networkDevice: NetworkDevice;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private networkDeviceService: NetworkDeviceService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.networkDeviceService.getNetworkDeviceById(id).subscribe(data => {
          this.networkDevice = data as NetworkDevice;
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
