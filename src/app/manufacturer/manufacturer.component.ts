import {Component, Input, OnInit} from '@angular/core';
import {Manufacturer} from "./manufacturer";

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  @Input() manufacturer: Manufacturer;

  constructor() {
  }

  ngOnInit() {
  }

}
