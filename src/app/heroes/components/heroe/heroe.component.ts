import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {}

}
