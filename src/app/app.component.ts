import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
