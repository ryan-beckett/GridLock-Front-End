import {Component, Input, OnInit} from '@angular/core';
import {Configuration} from "./configuration";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  @Input() configuration: Configuration;

  constructor() {
  }

  ngOnInit() {
  }

}
