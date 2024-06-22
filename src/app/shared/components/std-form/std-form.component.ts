import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild('stdForm') stdForm !: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  @Output() stdObj : EventEmitter<Istd> = new EventEmitter<Istd>()
  onStdAdd(){
    if(this.stdForm.valid){
      console.log(this.stdForm.value)
      this.stdObj.emit(this.stdForm.value)
      this.stdForm.reset()
    }
  }
}
