import { Projectmodel } from './interface/projectmodel';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { Servicesmodel } from './interface/servicesmodel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lstudiosafrika';

  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);


  @ViewChildren('intersect', { read: ElementRef }) intersecting: QueryList<ElementRef>;

  observer: any;


  sendingusermessage = false;
  open = 0;
  openmodal = false;
  mobiledev = false;
  switchtitle = 1;
  selection = 1;
  selectedproject: Projectmodel;
  selectedservice: Servicesmodel;

  Viewproject=false
  Viewservice=false
  messageform: FormGroup;
  projects: Projectmodel[] = [
    {
      title: 'NG chat',
      bgimage: '../assets/ngchat.png',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: 'snapshare',
      bgimage: '../assets/snapshare.PNG',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: 'check list',
      bgimage: '../assets/tasksio.png',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }, {
      title: ' nduthi.ke',
      bgimage: '../assets/nduthike.png',
      icons: [
        '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
      ],
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
      url: 'http://localhost:4200'
    }
    // , {
    //   title: 'insta share',
    //   bgimage: '../assets/unsplash/gallery.jpg',
    //   icons: [
    //     '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
    //   ],
    //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
    //   url: 'http://localhost:4200'
    // }, {
    //   title: 'ng gallery',
    //   bgimage: '../assets/unsplash/gallery.jpg',
    //   icons: [
    //     '../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'
    //   ],
    //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi assumenda reprehenderit aliquamreiciendis repudiandae sit porro',
    //   url: 'http://localhost:4200'
    // },

  ];
  services: Servicesmodel[]=[
    {
      title:'fullstack development',
      icon:'../assets/meanstack.png',
      desc:`
      we develop our full stack applications using the MEAN architecture where frontend we
       use Angular backend we use Express.js on top of Node.js and databse of choice mongoDb `,

    },
    {
      title:'Frontend development',
      icon:'../assets/angularicon.png',
      desc:`
      Our frontend technology of choice is Angular due to its highly robust scalable and effecient architecture for delivery of great frontend user experiences`,

    },
    {
      title:'Backend development',
      icon:'../assets/express-js-icon-20.png',
      desc:`
      We deploy our backend applications using the power of express on top of node js for easy to read well maintained and scalable code base `,

    },
    {
      title:'Mobile development',
      icon:'../assets/Logo_Ionic.png',
      desc:`
      Using the power of web technologies we bulid mobile apps using IONIC(angular) to build beutiful well thought out designs for quality ui/ux`,

    }
  ]
  icons = [];
  constructor(private fb: FormBuilder) {
    this.icons = ['../../../assets/angularicon.png', '../../../assets/express-js-icon-20.png', '../../../assets/Logo_Ionic.png', '../../../assets/node.png'];


  }




  ngOnInit() {

    this.switch();
    this.messageformbuild();
    this.intersectionmethod();

  }

  ngAfterViewInit(): void {
    // console.log(this.intersect);

    // this.observer.observe(this.intersecting[0].nativeElement)


    this.intersecting.forEach(inters => {

      console.log(inters);

      this.observer.observe(inters.nativeElement);


    });
  }

  intersectionmethod() {
    const options = {
      root: document.querySelector('fullapp'),
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {

      // console.log('all entries with observer', entries);

      if (entries[0].isIntersecting) {
        // console.log('class names: ',entries[0].nativeElement.classList);

        console.log('is intersectiong', entries[0].target.classList);
        entries[0].target.classList.add('aboutusanimation');

      }
    }, options);
  }


  messageformbuild() {
    this.messageform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }


  get _name() {
    return this.messageform.get('name');
  }
  get _email() {
    return this.messageform.get('email');
  }
  get _message() {
    return this.messageform.get('message');
  }


  async sendmessage(message) {
    console.log('message to be sent to server: ', this.messageform.value);
    this.sendingusermessage = true;
    try {
      const messageref = await addDoc(collection(this.db, 'usermessages'), {
        ...message
      });
      this.sendingusermessage = false;
      console.log(messageref.id);
      this.messageformbuild();
      alert('thank you for your message we will get back to you shortly');
    } catch (error) {
      console.log('error occured:', error);
      alert(' an error occured please try agin later')
      this.sendingusermessage = false;


    }

  }

  viewproject(i) {
    console.log('retrieved project: ', this.projects[i]);
    this.Viewproject=true;
    this.Viewservice=false
    this.openmodal = true;
    this.selectedproject = this.projects[i];
  }
  viewservice(i){

    this.Viewproject=false;
    this.Viewservice=true
    this.openmodal = true;
    this.selectedservice=this.services[i]
    console.log('service to view',this.selectedservice);


  }
  togglemenu() {
    console.log('bool value: ', this.open);

    if (this.open === 1) { return this.open = 2; }
    if (this.open === 2) { return this.open = 1; }
    if (this.open === 0) { return this.open = 1; }

  }

  closemodal(event) {
    this.openmodal = event;
  }

  switch() {

    setTimeout(() => {


      // console.log('before update: ', this.switchtitle);

      if (this.switchtitle === 2) { this.mobiledev = true; }
      if (this.switchtitle === 4) {
        this.switchtitle = 0;
      }
      this.switchtitle++;
      // console.log('after update: ', this.switchtitle);
      this.switch();
    }, 3000);


  }


  scrolltocontent(location: string) {
    // this.scroller.scrollToAnchor("contacts");
    if (location === 'home') { this.selection = 1; }
    if (location === 'about') { this.selection = 2; }
    if (location === 'services') { this.selection = 3; }
    if (location === 'portfolio') { this.selection = 4; }
    if (location === 'contacts') { this.selection = 5; }


    document.getElementById(location).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

}
