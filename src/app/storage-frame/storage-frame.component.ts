import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageFrame} from "./storage-frame";
import {StorageFrameService} from "./storage-frame.service";

declare var $: any;

@Component({
  selector: 'app-storage-frame',
  templateUrl: './storage-frame.component.html',
  styleUrls: ['./storage-frame.component.css']
})
export class StorageFrameComponent implements OnInit {

  storageFrame: StorageFrame;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private storageFrameService: StorageFrameService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.storageFrameService.getStorageFrameById(id).subscribe(data => {
          this.storageFrame = data as StorageFrame;
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
