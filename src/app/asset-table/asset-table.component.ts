import {Component, OnInit} from '@angular/core';
import {AssetService} from "../asset/asset.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-asset-table',
  templateUrl: './asset-table.component.html',
  styleUrls: ['./asset-table.component.css']
})
export class AssetTableComponent implements OnInit {

  assets: Array<any>;
  searchField: string;
  searchValue: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private assetService: AssetService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params["field"]) {
        this.searchValue = params["value"];
        this.assetService.getAssetsByName(this.searchValue).subscribe(data => {
          this.assets = data;
        });
      } else {
        //TODO: start here!
        this.assetService.getAssetById(params["id"]).subscribe(data => {
          this.assets = [data];
        });
      }
    });
  }

}
