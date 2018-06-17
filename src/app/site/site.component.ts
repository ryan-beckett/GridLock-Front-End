import {Component, Input, OnInit} from '@angular/core';
import {Site} from "./site";
import {SiteService} from "./site.service";

declare var $: any;

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  @Input() site: Site;

  constructor(private siteService: SiteService) {
  }

  ngOnInit() {
  }

  edit() {
    $("#siteFieldset").prop('disabled', false);
    $("#siteUpdateBtn").prop("hidden", false);
		return false;
  }

  update() {
    $("#siteFieldset").prop('disabled', true);
    $("#siteUpdateBtn").prop("hidden", true);
    this.siteService.updateSite(this.site.id + "", this.site)
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
