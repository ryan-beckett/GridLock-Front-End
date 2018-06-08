import {Component, Input, OnInit} from '@angular/core';
import {Site} from "./site";

declare var $: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  @Input() site: Site;

  constructor() {
  }

  ngOnInit() {
  }

  edit(event) {
    $("#siteFieldset").prop('disabled', false);
    $("#siteSaveBtn").prop("hidden", false);
		return false;
  }

  save() {
    $("#siteFieldset").prop('disabled', true);
    $("#siteEditHref").prop("hidden", true);
    $("#siteSaveBtn").prop("hidden", true);
    //Update logic here
    $("#statusMessage").text("Update success!");
		$("#statusMessageDiv").prop("hidden", false);
  }

}
