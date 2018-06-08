import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "./asset";

declare var $: any;

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})

export class AssetComponent implements OnInit {

  @Input() asset: Asset;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#assetFieldset").prop('disabled', false);
    $("#assetSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#assetFieldset").prop('disabled', true);
    $("#assetEditHref").prop("hidden", true);
    $("#assetSaveBtn").prop("hidden", true);
    //show spinner
    //Update logic here
    $("#statusMessage").text("Update success!");
    $("#statusMessageDiv").prop("hidden", false);
  }
}
