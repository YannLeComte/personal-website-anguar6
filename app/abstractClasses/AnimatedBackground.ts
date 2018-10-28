/**
 * Created by yannl on 28/10/2018.
 */
import {Input, Injectable} from '@angular/core';

@Injectable()
export abstract class AnimatedBackground {

  /* Animate background */
  @Input() screenSize: number;
  public x: number;
  public y: number;
  public lMouseX: number;
  public lMouseY: number;
  public scale: number;
  public indexCurrentImage: number;

  constructor() {
    /* Animate background */
    this.x = 0;
    this.y = 0;
    this.lMouseX = 0;
    this.lMouseY = 0;
    this.indexCurrentImage = -1;
    this.scale = 1;
  }

   /* */
  fctMouseOver(event, index): void {
    this.indexCurrentImage = index;

    /* get the element with the image*/
    let imgElement;
    for (let el of  event.path) {
      if (el.className === 'img-col') {
        imgElement = el;
      }
    }

    /* move the object with the mouse position */
    this.lMouseX = (event.pageX - imgElement.offsetLeft) - (imgElement.clientWidth / 2);
    this.lMouseY = (event.pageY - imgElement.offsetTop) - (imgElement.clientHeight / 2);
    this.x = this.lMouseX / 10;
    this.y = this.lMouseY / 10;
    this.scale = 1.1;
  }

  /* reset the position of the object when it's out the element */
  fctMouseOut(event): void {
    this.x = 0;
    this.y = 0;
    this.scale = 1;
  }
}
