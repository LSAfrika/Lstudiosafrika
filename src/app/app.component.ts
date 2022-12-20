import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lstudiosafrika';
  open = 0
  mobiledev = false;
  switchtitle = 1
  selection = 1
  projects = [
    {
      title: 'chat',
      bgimage: '../assets/unsplash/daniel-korpai-r73OFSry5AI-unsplash.jpg'
    }, {
      title: 'snapshare',
      bgimage: '../assets/unsplash/daniel-korpai-r73OFSry5AI-unsplash.jpg'
    }, {
      title: 'check list',
      bgimage: '../assets/unsplash/kelly-sikkema--1_RZL8BGBM-unsplash.jpg'
    }, {
      title: ' gallery',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg'
    }, {
      title: 'insta share',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg'
    }, {
      title: 'ng gallery',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg'
    },

  ]

  constructor() {

  }
  ngOnInit() {

    this.switch()

  }

  togglemenu() {
    console.log('bool value: ', this.open);
    if (this.open === 1) return this.open = 2
    if (this.open === 2) return this.open = 1
    if (this.open === 0) return this.open = 1

  }

  switch() {

    setTimeout(() => {


      // console.log('before update: ', this.switchtitle);

      if (this.switchtitle === 2) { this.mobiledev = true }
      if (this.switchtitle === 4) {
        this.switchtitle = 0
      }
      this.switchtitle++
      // console.log('after update: ', this.switchtitle);
      this.switch()
    }, 3000);


  }


  scrolltocontent(location: string) {
    // this.scroller.scrollToAnchor("contacts");
    if (location === 'home') this.selection = 1
    if (location === 'about') this.selection = 2
    if (location === 'services') this.selection = 3
    if (location === 'portfolio') this.selection = 4


    document.getElementById(location).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
