import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  @Input() selectedHero: Hero;

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }

  constructor() {
  }

  ngOnInit() {
    this.heroes = HEROES;
  }

}
