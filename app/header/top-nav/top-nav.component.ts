import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  /* scroll to the wanted element, triggered when clicking in a menu item */
  scroll(e) {
    document.getElementById(e).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
