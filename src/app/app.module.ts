import { AuthorService } from './course/author.serveice';
import { AuthorComponent } from './course/author.component';
import { CourseServices } from './courses.services';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseServices,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
