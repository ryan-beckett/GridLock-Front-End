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
    $('.nav-tabs').scrollingTabs({
      enableSwiping: true
    });
    $('.nav-tabs a').click(function(){
      $(".tab-content").animate({ scrollTop: 0 }, 600);
    });
  }

}
