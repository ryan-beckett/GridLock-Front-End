import {Component, Input, OnInit} from '@angular/core';
import {GridLocation} from "./grid-location";

@Component({
  selector: 'app-grid-location',
  templateUrl: './grid-location.component.html',
  styleUrls: ['./grid-location.component.css']
})
export class GridLocationComponent implements OnInit {

  @Input() gridLocation: GridLocation;

  constructor() {
  }

  ngOnInit() {
  }

}
