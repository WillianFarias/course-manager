import { Component } from '@angular/core';

@Component({
  //De forma simplista gera uma tag que pode ser utilizada em qualquer lugar
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  name: string = 'John';
}
