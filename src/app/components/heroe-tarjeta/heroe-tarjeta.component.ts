import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent {
  @Input() heroe:any={};
  @Input() id:any;
  @Output() heroeSeleccionado: EventEmitter<number>
  constructor(private router:Router){
    this.heroeSeleccionado=new EventEmitter();
  }
  verHeroe(){
    this.router.navigate(['/heroe',this.id]);
    
  }
}
