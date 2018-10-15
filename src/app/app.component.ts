import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Tour of Heroes';
  userName = 'Mr. ABC';
=======
  hero: Hero;
  
  title = 'Tour of Heroes';
  userName = 'Mr. ABC';

  constructor()
  {
    this.hero = {
      id: 1,
      name: 'ABC'
    };
  }
>>>>>>> d622f4f4bf055abc2cef99282ff35ec6de17ec87
}
