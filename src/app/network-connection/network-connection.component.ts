import {Component, Input, OnInit} from '@angular/core';
import {NetworkConnection} from "./network-connection";

@Component({
  selector: 'app-network-connection',
  templateUrl: './network-connection.component.html',
  styleUrls: ['./network-connection.component.css']
})
export class NetworkConnectionComponent implements OnInit {

  @Input() networkConnection: NetworkConnection;

  constructor() {
  }

  ngOnInit() {
  }

}
