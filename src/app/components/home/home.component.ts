import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title:string
  message:string
  constructor(){
    this.title='Comic App';
    this.message='Ésta es una aplicación de comics.'
  }
}
