import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MainFrame} from "./main-frame";
import {MainFrameService} from "./main-frame.service";

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit {

  mainFrame: MainFrame;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private mainFrameService: MainFrameService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.mainFrameService.getMainFrameById(id).subscribe(data => {
          this.mainFrame = data as MainFrame;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
