import { Component, OnInit, NgModule } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  heroes:any[]=[];
  termino:any;
  constructor(private activateRoute:ActivatedRoute, private _heroeService:HeroesService, private router:Router){
    
  }
  ngOnInit(){
    this.activateRoute.params.subscribe(params=>{
      this.termino=params['termino']
      this.heroes=this._heroeService.searchHeroe(this.termino)
      console.log(this.termino)
    })
  }
  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }
}
