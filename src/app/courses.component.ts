import { CourseServices } from './courses.services';
import { Component } from '@angular/core';

@Component({

    // tslint:disable-next-line: component-selector
    selector: 'Course',
    template: `<h2>{{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}} </li>
        </ul>
    `

})

export class CoursesComponent{
 title = 'Angular is Shit';
 courses ;
    constructor(service : CourseServices){
        // const service = new CourseServices();
        this.courses = service.getCourse()
    }
}
