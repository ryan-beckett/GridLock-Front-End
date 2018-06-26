import {Component, OnInit} from '@angular/core';

declare var $: any;
const iconHtml = "<i id=\"editBtnContent\" class=\"far fa-edit\" aria-hidden=\"true\"></i>&nbsp;";

@Component({
  selector: 'app-util-panel',
  templateUrl: './util-panel.component.html',
  styleUrls: ['./util-panel.component.css']
})
export class UtilPanelComponent implements OnInit {

  isEditing: boolean;

  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      $("#editBtn").html(iconHtml + "Done Edit");
      $("fieldset:disabled").each(function () {
        $(this).find("a:hidden").prop("hidden", false);
      });
    } else {
      $("#editBtn").html(iconHtml + "Edit");
      $("fieldset:enabled").each(function () {
        $(this).prop("disabled", true);
      });
      $("fieldset").each(function () {
        $(this).find("a").prop("hidden", true);
        $(this).find("button").prop("hidden", true);
      });
    }
  }

}
