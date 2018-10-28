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
  public lFollowX: number;
  public lFollowY: number;
  public friction: number;
  public scale: number;
  public indexCurrentImage: number;

  constructor() {
    /* Animate background */
    this.x = 0;
    this.y = 0;
    this.lMouseX = 0;
    this.lMouseY = 0;
    this.lFollowX = 0;
    this.lFollowY = 0;
    this.friction = 1 / 30;
    this.indexCurrentImage = -1;
    this.scale = 1;
  }

  fctMouseOver(event, index): void {
    this.indexCurrentImage = index;
    let imgElement;
    for (let el of  event.path) {
      if (el.className === 'img-col') {
        imgElement = el;
      }
    }
    this.lMouseX = (event.pageX - imgElement.offsetLeft) - (imgElement.clientWidth / 2);
    this.lMouseY = (event.pageY - imgElement.offsetTop) - (imgElement.clientHeight /2);
    this.x = this.lMouseX / 10;
    this.y = this.lMouseY / 10;

    this.scale = 1.1;
  }

  fctMouseOut(event): void {
    this.x = 0;
    this.y = 0;
    this.scale = 1;
  }
}
