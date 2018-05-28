import {Component, Input, OnInit} from '@angular/core';
import {SupportUnit} from "./support-unit";

@Component({
  selector: 'app-support-unit',
  templateUrl: './support-unit.component.html',
  styleUrls: ['./support-unit.component.css']
})
export class SupportUnitComponent implements OnInit {

  @Input() supportUnit: SupportUnit;

  constructor() {
  }

  ngOnInit() {
  }

}
