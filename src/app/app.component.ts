import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lstudiosafrika';
  open = false

  projects = [
    {
      title: 'ng chat',
      bgimage: '../assets/unsplash/daniel-korpai-r73OFSry5AI-unsplash.jpg'
    }, {
      title: 'ng snapshare',
      bgimage: '../assets/unsplash/daniel-korpai-r73OFSry5AI-unsplash.jpg'
    }, {
      title: 'ng check list',
      bgimage: '../assets/unsplash/kelly-sikkema--1_RZL8BGBM-unsplash.jpg'
    }, {
      title: 'ng gallery',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg'
    },

  ]


  togglemenu() {
    this.open = !this.open
    console.log('bool value: ', this.open);

  }
}
