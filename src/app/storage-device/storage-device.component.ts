import {Component, OnInit} from '@angular/core';
import {MainFrame} from "../main-frame/main-frame";
import {ActivatedRoute, Router} from "@angular/router";
import {MainFrameService} from "../main-frame/main-frame.service";
import {StorageDevice} from "./storage-device";
import {StorageDeviceService} from "./storage-device.service";

declare var $: any;

@Component({
  selector: 'app-storage-device',
  templateUrl: './storage-device.component.html',
  styleUrls: ['./storage-device.component.css']
})
export class StorageDeviceComponent implements OnInit {

  storageDevice: StorageDevice;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private storageDeviceService: StorageDeviceService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.storageDeviceService.getStorageDeviceById(id).subscribe(data => {
          this.storageDevice = data as StorageDevice;
        });
      }
    });
  }

  ngOnInit() {
    $('.nav-tabs').scrollingTabs({
      enableSwiping: true
    });
    $('.nav-tabs a').click(function () {
      $(".tab-content").animate({scrollTop: 0}, 600);
    });
  }

}
