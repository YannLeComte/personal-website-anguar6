import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.css']
})
export class HeroImgComponent implements OnInit {
  imagesource: string;
  isImageLoaded: boolean;

  constructor() {
    this.imagesource = '/assets/img/hero-img-bigmin.jpg';
  }

  ngOnInit() {
  }

  imageLoaded() {
    this.isImageLoaded = true;
  }
}
