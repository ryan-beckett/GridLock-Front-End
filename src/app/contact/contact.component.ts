import {Contact} from "./contact";
import {Component, Input, OnInit} from "@angular/core";

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#contactFieldset").prop('disabled', false);
    $("#contactSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#contactFieldset").prop('disabled', true);
    $("#contactEditHref").prop("hidden", true);
    $("#contactSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
