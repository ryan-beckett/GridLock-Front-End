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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private assetService: AssetService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.assetService.getAssetByQueryParams(params).subscribe(data => {
          this.assets = data;
        });
    });
  }

}
