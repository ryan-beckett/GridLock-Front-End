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
          $("#statusMessage").removeClass("alert-danger");
          $("#statusMessage").addClass("alert-success");
          $("#statusMessage").text("Update success!");
          $("#statusMessageDiv").prop("hidden", false);
        },
        error => {
          $("#statusMessage").removeClass("alert-success");
          $("#statusMessage").addClass("alert-danger");
          $("#statusMessage").text("Update failed!");
          $("#statusMessageDiv").prop("hidden", false);
        });
  }

}
