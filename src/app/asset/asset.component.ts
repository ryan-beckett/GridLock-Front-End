import {Component, Input, OnInit} from '@angular/core';
import {Asset} from "./asset";

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

}
