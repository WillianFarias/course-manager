import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course.list.component.html'
})

export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  //sera chamado assim que o componente for criado
  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        code: 'XPS-3587',
        duration: 120,
        rating: 5.4
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        code: 'XPS-3569',
        duration: 45.99,
        rating: 4.4
      }
    ]
  }
}
