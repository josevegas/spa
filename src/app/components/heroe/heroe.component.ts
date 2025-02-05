import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe:any={};
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService){
    
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.heroe=this._heroesService.getHeroeById(params['id']);
      console.log(this.heroe);
    })
  }
}
