import { Component } from '@angular/core';

@Component({
    selector: 'app-star',
    template:`
    <div> 
        <button (click)='onClick()'>{{clicked? title : title2}}</button>
        <h1>{{clicked? title : title2}} </h1>

        <input [(ngModel)]='value' />
        <p>{{value | uppercase}} </p>
    </div>
    
    `
})

export class StarComponent{

    title = 'click me ';
    title2 = 'why did you clicked me?';
    value='';

    clicked =true;
    onClick(){
        this.clicked = ! this.clicked;
    }
}