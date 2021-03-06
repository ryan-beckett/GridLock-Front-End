import {Contact} from "./contact";
import {Component, Input, OnInit} from "@angular/core";
import {ContactService} from "./contact.service";

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#contactFieldset").prop('disabled', false);
    $("#contactUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#contactFieldset").prop('disabled', true);
    $("#contactUpdateBtn").prop("hidden", true);
    this.contactService.updateContact(this.contact.id + "", this.contact)
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
