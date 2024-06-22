import { Component } from '@angular/core';
import { Istd } from './shared/models/std.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stdDataMT';
  stdArr:Array<Istd>=[
    {
      fname: "jhon",
      lname:"doe",
      email:"jd@gmail.com",
      contact:"5418465456"
    }
  ]

  getStdData(data : Istd){
    console.log(data);
    this.stdArr.unshift(data)
  }
}