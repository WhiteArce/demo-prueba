import { Persona } from './tasks/persona.model';

export interface AppState {
    readonly personas: Persona[];
}