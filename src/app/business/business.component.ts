import {Component, Input, OnInit} from '@angular/core';
import {Business} from "./business";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  @Input() business: Business;

  constructor() {
  }

  ngOnInit() {
  }

}
