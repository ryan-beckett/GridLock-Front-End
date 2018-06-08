import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RackService} from "./rack.service";
import {Rack} from "./rack";

declare var $: any;

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.css']
})
export class RackComponent implements OnInit, AfterViewChecked {

  rack: Rack;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private rackService: RackService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.rackService.getRackById(id).subscribe(data => {
          this.rack = data as Rack;
        });
      }
    });
  }

  ngOnInit(){
  }

  ngAfterViewChecked() {
    if (!$.fn.dataTable.isDataTable('#rackDevices')) {
      $('#rackDevices').DataTable({
        "order": [[2, "desc"]]
      });
    }
  }

  enableEditing() : void {
    $("fieldset:disabled").each(function() {
      $(this).find("a:hidden").removeAttr("hidden");
    });
  }
}
