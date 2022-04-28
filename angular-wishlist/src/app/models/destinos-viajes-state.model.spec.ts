
import {
  reducerDestinosViajes,
  DestinosViajesState,
  initializeDestinosViajesState,
  InitMyDataAction,
  NuevoDestinoAction
} from './destinos-viajes-state.model';
import { DestinoViaje } from './destino-viaje.model';


describe('reducerDestinosViajes', () => {
  it('should reduce init data', () => {
    // setup
    const prevState: DestinosViajesState = initializeDestinosViajesState();
    const action: InitMyDataAction = new InitMyDataAction(['destino 1', 'destino 2']);
    // action, interactuar
    const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
    // asserts
    expect(newState.items.length).toEqual(2);
    expect(newState.items[0].nombre).toEqual('destino 1');
    // teardown: eliminar lo que hiciste, por ejemplo en base de datos
  });

  it('should reduce new item added', () => {
    const prevState: DestinosViajesState = initializeDestinosViajesState();
    const action: NuevoDestinoAction = new NuevoDestinoAction(new DestinoViaje('atenas', 'url'));
    const newState: DestinosViajesState = reducerDestinosViajes(prevState, action);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0].nombre).toEqual('atenas');
  });
});


