// 1 - Importaciones
import { Action } from '@ngrx/store'
import { Persona } from '../tasks/persona.model'

// 2 - Definición del tipo de acción
export const ADD_PERSONA = 'Agregar persona'

// 3 - Creación de la clase tipo AddTask
export class AddPersona implements Action {
  readonly type = ADD_PERSONA
  constructor(public payload: Persona) { }
}

// 4 - Exportación de la acción
export type Actions = AddPersona