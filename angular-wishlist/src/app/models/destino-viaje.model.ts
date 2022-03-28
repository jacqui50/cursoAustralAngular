
import { v4 as uuid } from 'uuid';

export class DestinoViaje {
  private selected: boolean = false;
  public atractivos: string[];
  id = uuid();
/*
	nombre:string;
	imagenUrl:string;

	constructor(n:string, u:string) {
		this.nombre = n;
		this.imagenUrl = u;
	}
*/

  constructor(public nombre: string, public url: string, public votes: number = 0) {
    this.atractivos = ['playa', 'pueblo mágico'];
  }

  isSelected() {
    return this.selected;
  }

  setSelected(s: boolean) {
    this.selected = s;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

}
