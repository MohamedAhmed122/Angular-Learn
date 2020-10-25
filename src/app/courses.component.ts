import { CourseServices } from './courses.services';
import { Component } from '@angular/core';

@Component({

    // tslint:disable-next-line: component-selector
    selector: 'Course',
    template: `<h2>{{ isActive? title : title2}} </h2>
        <ul>
            <li *ngFor="let course of courses"> {{course}} </li>
        </ul>
        <div style='margin: 100px'> 
            <button (click)="onSave()" [class]="isActive ? 'btn btn-primary':'' " >
                {{title}}
            </button>
            <input #text (keyup.enter)='onKeyup(text.value)' style='display:block;' />
            <p>{{textInput}} </p>
            <input  (keyup.enter)='onKeydown()' [type]="hidden? 'password' : 'text' " />
        </div>
       

    `

})
// class binding
// <button className ={`${isActive}? '': '`} />
//<button (click)="onSave()" style='margin: 100px' [class]="isActive ? 'btn btn-primary': '' " >{{title}}</button>
export class CoursesComponent{
 title = 'Angular is Shit';
 title2 = 'Angular is not really shit';
 textInput ;
 isActive =true;
 hidden = true;
 courses ;
    constructor(service : CourseServices){
        // const service = new CourseServices();
        this.courses = service.getCourse()
    }
    onSave(){
        this.isActive =!this.isActive;
        this.isActive ? console.log('button is Clicked') : console.log('button is Clicked Twice')
        
    }
    onKeyup(text){
        console.log('do not click son of b**ch ')
        this.textInput =text;
    
    }
    onKeydown(){
        this.hidden= !this.hidden;
    }
}
