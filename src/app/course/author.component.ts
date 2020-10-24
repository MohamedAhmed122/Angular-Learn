import { AuthorService } from './author.serveice';
import { Component } from '@angular/core';

@Component({
    selector:'app-author',
    template: `<h3>{{title}}</h3>
        <ul>
            <li *ngFor="let author of authors">{{author}}</li>
        </ul>
    `
})
export class AuthorComponent{
    title = 'Author'
    authors ;

    constructor(service: AuthorService){
        this.authors = service.getAuthor();
    }
}