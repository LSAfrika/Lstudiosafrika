import { Projectmodel } from './../../interface/projectmodel';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';




@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {

  @Output() closemodal: EventEmitter<Boolean> = new EventEmitter<Boolean>()
  @Input() project: Projectmodel;
  constructor() { }

  ngOnInit(): void {

    console.log('passed project: ', this.project);

  }


  closemodalpanel() {
    this.closemodal.emit(false)
  }
}
