import { Component, OnInit, Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {

	/*@Input() nombre: string;*/
	@Input() destino: DestinoViaje;

	/* le pego atributo class para que esté coqueto */
	@HostBinding('attr.class') cssClass='col-md-4';

  constructor() { 
	/*this.nombre = 'dummy';*/
	this.destino = new DestinoViaje('dummy', 'http');
  }

  ngOnInit(): void {
  }

}
