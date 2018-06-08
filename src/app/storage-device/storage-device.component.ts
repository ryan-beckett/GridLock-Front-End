import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  }

  enableEditing() : void {
    $("fieldset:disabled").each(function() {
      $(this).find("a:hidden").removeAttr("hidden");
    });
  }

}
