import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  busqueda: string;

  constructor(private activatedRouter: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.busqueda = params.find;
      this.heroes = this.heroesService.buscarHeroes(params.find);
      console.log(this.heroes);
    });
  }

}
