import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { AppState } from '../app.module';
import { DestinoViaje } from './destino-viaje.model';
import { ElegidoFavoritoAction, NuevoDestinoAction } from './destinos-viajes-state.model';

@Injectable()
export class DestinosApiClient {

  //destinos: DestinoViaje[];
  //current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null);

  constructor(private store: Store<AppState>) {
    //this.destinos = [];
  }

  add(d: DestinoViaje) {
    this.store.dispatch(new NuevoDestinoAction(d));
    //this.destinos.push(d);
  }
  /*getAll(): DestinoViaje[] {
    return this.destinos;
  }
  getById(id: string): DestinoViaje {
    return this.destinos.filter(function (d) { return d.id.toString() === id; })[0];
  }*/
  elegir(d: DestinoViaje) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
      //;    this.destinos.forEach(x => x.setSelected(false));
    //d.setSelected(true);
    //this.current.next();
  }

  /*
  subscribeOnChange(fn) {
    this.current.subscribe(fn);
  }*/

}
