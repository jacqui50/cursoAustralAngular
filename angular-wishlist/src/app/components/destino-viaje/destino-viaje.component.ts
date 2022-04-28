import { Component, OnInit, Input } from '@angular/core';
import { HostBinding, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.module';
import { VoteUpAction } from './../../models/destinos-viajes-state.model';
import { DestinoViaje } from './../../models/destino-viaje.model';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css'],

  animations: [
    trigger('esFavorito', [
      state('estadoFavorito', style({
        backgroundColor: 'PaleTurquoise'
      })),
      state('estadoNoFavorito', style({
        backgroundColor: 'WhiteSmoke'
      })),
      transition('estadoNoFavorito => estadoFavorito', [
        animate('3s')
      ]),
      transition('estadoFavorito => estadoNoFavorito', [
        animate('1s')
      ]),
    ])
  ]
})
export class DestinoViajeComponent implements OnInit {

	/*@Input() nombre: string;*/
	/*@Input() nombre: string;*/

    @Input()
  destino!: DestinoViaje;
  @Input('idx')
    posicion!: number;

	/* le pego atributo class para que esté coqueto */
  @HostBinding('attr.class') cssClass = 'col-md-4';

  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor(private store: Store<AppState>) {
	/*this.nombre = 'dummy';*/
    //this.destino = new DestinoViaje('dummy', 'http');
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir() {
    this.clicked.emit(this.destino);
    return false; // siempre para que no se recargue (sumbit) la página
  }

  voteUp() {
    this.store.dispatch(new VoteUpAction(this.destino));
    return false;
  }

  voteDown() {
    this.store.dispatch(new VoteDownAction(this.destino));
    return false;
  }

}
