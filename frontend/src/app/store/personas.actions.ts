import { Action } from '@ngrx/store'
import { IPersona } from '../tasks/persona.model'


export const ADD_PERSONA = 'Agregar persona'

//Clase encargada para el agregado de las personas
export class AddPersona implements Action {
  readonly type = ADD_PERSONA
  constructor(public payload: IPersona) { }
}


export type Actions = AddPersona