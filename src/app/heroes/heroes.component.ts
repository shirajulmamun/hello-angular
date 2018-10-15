<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit,Input } from '@angular/core';
>>>>>>> d622f4f4bf055abc2cef99282ff35ec6de17ec87
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
<<<<<<< HEAD
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  selectedHero: Hero;
=======

  heroes: Hero[];
  @Input() selectedHero: Hero;
>>>>>>> d622f4f4bf055abc2cef99282ff35ec6de17ec87

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }

  constructor() {
  }

  ngOnInit() {
    this.heroes = HEROES;
  }

}
