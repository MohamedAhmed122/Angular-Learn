import { CourseServices } from './courses.services';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
@Component({

    // tslint:disable-next-line: component-selector
    selector: 'Course',
    template: `<h2>{{  title }} </h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}} </li>
        </ul>
        <input [(ngModel)]='name' (keyup.enter)='onKeyup()'  />
        <p>{{name}} </p>
       

    `
})
// banana in Box [()]

export class CoursesComponent{
   
    title = 'Angular is Shit';
   
    courses: string[] ;
    name = '';
    constructor(service : CourseServices){
        // const service = new CourseServices();
        this.courses = service.getCourse()
    }

   onKeyup(){
    console.log(this.name);
   }
  
  
}
