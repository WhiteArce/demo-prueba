import { IPersona } from './tasks/persona.model';

export interface AppState {
    readonly personas: IPersona[];
}