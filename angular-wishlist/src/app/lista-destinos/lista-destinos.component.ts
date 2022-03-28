import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state.model';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

	/*destinos: string[];*/
  //destinos: DestinoViaje[];
  //destinosApiClient: DestinosApiClient;
  constructor(private destinosApiClient: DestinosApiClient, private store: Store<AppState>) {
	/*this.destinos = ['Atenas','Machu Pichu','Kyoto','Los Cabos']; */
    //this.destinos = [];
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store.select(state => state.destinos.favorito)
      .subscribe(data => {
        //const fav = data;
        if (data != null) {
          this.updates.push('Se ha elegido a ' + data.nombre);
        }
      });
    /*this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if (d != null) {
        this.updates.push('Se ha elegido a ' + d.nombre);
      }
    });*/
    this.all = null;
    store.select(state => state.destinos.items).
      subscribe(items => this.all = items);
  }

  ngOnInit(): void {
  }


  /* Mejor usaremos agregar ahora que extirpamos la captura
   * guardar(nombre:string, url:string):boolean { 
    console.log(nombre);
    console.log(url);
    console.log(new DestinoViaje(nombre, url));
    this.destinos.push(new DestinoViaje(nombre, url));
    console.log(this.destinos);
    return false; 
  } */

  agregar(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    //this.store.dispatch(new NuevoDestinoAction(d));
    //return false;

  }

  elegido(d: DestinoViaje) {
    /*this.destinosApiClient.getAll().forEach(
      function (x) {
        x.setSelected(false);
      }
    );
    d.setSelected(true);
    */
    this.destinosApiClient.elegir(d);
    //this.store.dispatch(new ElegidoFavoritoAction(d));
  }

  getAll() {

  }

}
