import { Projectmodel } from './../../interface/projectmodel';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Servicesmodel } from 'src/app/interface/servicesmodel';




@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {

  @Output() closemodal: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() project: Projectmodel;
  @Input() service: Servicesmodel;
  @Input() viewproject: boolean
  @Input() viewservice: boolean
  constructor() { }

  ngOnInit(): void {

    // console.log('passed project: ', this.project);
    // console.log('passed service: ', this.service);
    console.log('project view: ', this.viewproject);
    console.log('service view: ', this.viewservice);


  }


  closemodalpanel() {
    this.closemodal.emit(false)
  }
}
