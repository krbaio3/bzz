import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroesService } from '../../../service/heroes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss']
})
export class ShowHeroeComponent implements OnInit {
  heroe: any = {};
  private paramSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this.paramSubscription = activatedRoute.paramMap.subscribe(
      (params: ParamMap): void => {
        console.log('Parent ID changed:', params.get('id'));

        console.log(params.get('id'));

        // Simulate loading the data from some external service.
      }
    );
  }

  ngOnInit() {}
}
