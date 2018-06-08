import {Component, Input, OnInit} from '@angular/core';
import {Room} from "./room";

declare var $: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() room: Room;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#roomFieldset").prop('disabled', false);
    $("#roomSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#roomFieldset").prop('disabled', true);
    $("#roomEditHref").prop("hidden", true);
    $("#roomSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
