import {Contact} from "./contact";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor() {
  }

  ngOnInit() {
  }

}
