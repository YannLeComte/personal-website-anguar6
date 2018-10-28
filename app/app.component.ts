import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Yann Le Comte';

  /* On resize, send screenSize to the children, used to reorganise the grid setup */
  public screenSize: number;

  constructor() {
    this.screenSize = window.innerWidth;
  }

  onResize(event) {
    this.screenSize = event.target.innerWidth;
  }
}
