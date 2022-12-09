import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lstudiosafrika';
  open = false
  mobiledev=false;
switchtitle =1
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

  ngOnInit(){
  
      this.switch()

  }

  togglemenu() {
    this.open = !this.open
    console.log('bool value: ', this.open);

  }

  switch(){
  
    setTimeout(() => {
      
      
    console.log('before update: ',this.switchtitle);

    if(this.switchtitle===2){this.mobiledev=true}
    if(this.switchtitle===4) {this.switchtitle=0
    }
    this.switchtitle++
    console.log('after update: ',this.switchtitle);
    this.switch() 
    }, 3000);

    
  }


}
