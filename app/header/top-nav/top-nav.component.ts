import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input() body: any;
  constructor() { }

  ngOnInit() {
  }

  scroll(e) {
    document.getElementById(e).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
