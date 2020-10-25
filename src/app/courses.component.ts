import { CourseServices } from './courses.services';
import { Component } from '@angular/core';

@Component({

    // tslint:disable-next-line: component-selector
    selector: 'Course',
    template: `<h2>{{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}} </li>
        </ul>
        <button (click)="onSave()" style='margin: 100px' [class]="isActive ? 'btn btn-primary': '' " >
            {{title}}
        </button>
    `

})
// class binding
// <button className ={`${isActive}? '': '`} />
//<button (click)="onSave()" style='margin: 100px' [class]="isActive ? 'btn btn-primary': '' " >{{title}}</button>
export class CoursesComponent{
 title = 'Angular is Shit';
 isActive =true;
 courses ;
    constructor(service : CourseServices){
        // const service = new CourseServices();
        this.courses = service.getCourse()
    }
    onSave(){
        this.isActive =!this.isActive;
        this.isActive ? console.log('button is Clicked') : console.log('button is Clicked Twice')
        
    }
}
