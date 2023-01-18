import { Projectmodel } from './interface/projectmodel';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lstudiosafrika';
  open = 0
  openmodal = false
  mobiledev = false;
  switchtitle = 1
  selection = 1
  selectedproject: Projectmodel
  messageform: FormGroup
  projects: Projectmodel[] = [
    {
      title: 'NG chat',
      bgimage: '../assets/unsplash/daniel-korpai-r73OFSry5AI-unsplash.jpg',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: 'snapshare',
      bgimage: '../assets/unsplash/daniel-korpai-r73OFSry5AI-unsplash.jpg',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: 'check list',
      bgimage: '../assets/unsplash/kelly-sikkema--1_RZL8BGBM-unsplash.jpg',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: ' gallery',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: 'insta share',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: 'ng gallery',
      bgimage: '../assets/unsplash/annie-spratt-EvBPSTn-p5U-unsplash.jpg',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    },

  ];
  icons = []
  constructor(private fb: FormBuilder) {
    this.icons = ['../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png']


  }
  ngOnInit() {

    this.switch()
    this.messageformbuild()
  }

  messageformbuild() {
    this.messageform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  get _name() {
    return this.messageform.get('name')
  }
  get _email() {
    return this.messageform.get('email')
  }
  get _message() {
    return this.messageform.get('message')
  }


  sendmessage() {
    console.log('message to be sent to server: ', this.messageform.value);

  }

  viewproject(i) {
    console.log('retrieved project: ', this.projects[i])
    this.openmodal = true
    this.selectedproject = this.projects[i]
  }
  togglemenu() {
    console.log('bool value: ', this.open);
    if (this.open === 1) return this.open = 2
    if (this.open === 2) return this.open = 1
    if (this.open === 0) return this.open = 1

  }

  closemodal(event) {
    this.openmodal = event
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
