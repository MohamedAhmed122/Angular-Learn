import { AuthorService } from './author.serveice';
import { Component } from '@angular/core';

@Component({
    selector:'app-author',
    template: `<h3>{{title}}</h3>
        <ul>
            <li *ngFor="let author of authors">{{author}}</li>
        </ul>
        <img style='display:block;' src={{imageURL}} />
        <img [src] ='imageURL' />
    `
})
export class AuthorComponent{
    title = 'Author';
    imageURL = 'https://i.pinimg.com/236x/81/68/58/81685821ea7308cc910631cf167c60eb.jpg'
    authors ;

    constructor(service: AuthorService){
        this.authors = service.getAuthor();
    }
}