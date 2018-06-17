import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "./asset";
import {AssetService} from "./asset.service";

declare var $: any;

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})

export class AssetComponent implements OnInit {

  @Input() asset: Asset;

  constructor(private assetService: AssetService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#assetFieldset").prop('disabled', false);
    $("#assetUpdateBtn").prop("hidden", false);
    return false;
  }

  update() {
    $("#assetFieldset").prop('disabled', true);
    $("#assetUpdateBtn").prop("hidden", true);
    this.assetService.updateAsset(this.asset.id + "", this.asset)
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
