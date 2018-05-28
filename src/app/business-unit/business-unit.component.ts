import {Component, Input, OnInit} from '@angular/core';
import {BusinessUnit} from "./business-unit";

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit {

  @Input() businessUnit: BusinessUnit;

  constructor() {
  }

  ngOnInit() {
  }

}
