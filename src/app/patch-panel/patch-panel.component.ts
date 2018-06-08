import {Component, OnInit} from '@angular/core';
import {PatchPanel} from "./patch-panel";
import {ActivatedRoute, Router} from "@angular/router";
import {PatchPanelService} from "./patch-panel.service";

declare var $: any;

@Component({
  selector: 'app-patch-panel',
  templateUrl: './patch-panel.component.html',
  styleUrls: ['./patch-panel.component.css']
})
export class PatchPanelComponent implements OnInit {

  patchPanel: PatchPanel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private patchPanelService: PatchPanelService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.patchPanelService.getPatchPanelById(id).subscribe(data => {
          this.patchPanel = data as PatchPanel;
        });
      }
    });
  }

  ngOnInit() {
  }

  enableEditing() : void {
    $("fieldset:disabled").each(function() {
      $(this).find("a:hidden").removeAttr("hidden");
    });
  }

}
