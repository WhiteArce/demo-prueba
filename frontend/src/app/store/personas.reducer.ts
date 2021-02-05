// 1 - Importaciones
import { IPersona } from '../tasks/persona.model'
import * as PersonasActions from './personas.actions'

// 2 - Estado inicial
const initialState = {
  nombre: '',
  apellidoP: '',
  apellidoM: '',
  direccion: '',
  telefono: 0
}

// 3 - Switch con las funciones puras
export function personaReducer(state: IPersona[] = [initialState], action: PersonasActions.Actions) {
  switch (action.type) {
    case PersonasActions.ADD_PERSONA:
      return [...state, action.payload];
    default:
      return state;
  }
}