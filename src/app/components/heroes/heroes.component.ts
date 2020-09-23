import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements  OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesServie: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesServie.getHeroes;
  }

  /*
   * verHeroe(idx: number): void{
   *this.router.navigate(['/hero', idx]);
   *}
   */
}
