import {Component, Input, OnInit} from '@angular/core';
import {Room} from "./room";
import {RoomService} from "./room.service";

declare var $: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() room: Room;

  constructor(private roomService: RoomService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#roomFieldset").prop('disabled', false);
    $("#roomUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#roomFieldset").prop('disabled', true);
    $("#roomUpdateBtn").prop("hidden", true);
    this.roomService.updateRoom(this.room.id + "", this.room)
      .subscribe(resp => {
          $("#statusMessageDiv").prop("hidden", true);
          $("#statusMessageDiv").removeClass("alert-danger");
          $("#statusMessageDiv").addClass("alert-success");
          $("#statusMessage").text("Update success!");
          $("#statusMessageDiv").prop("hidden", false);
        },
        error => {
          $("#statusMessageDiv").prop("hidden", true);
          $("#statusMessageDiv").removeClass("alert-success");
          $("#statusMessageDiv").addClass("alert-danger");
          $("#statusMessage").text("Update failed!");
          $("#statusMessageDiv").prop("hidden", false);
        });
  }

}
