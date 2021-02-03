import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as PersonaActions from '../store/personas.actions';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addPerson(
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    direccion: string,
    telefono: string
  ) {
    this.store.dispatch(
      new PersonaActions.AddPersona({
        nombre: nombre,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        direccion: direccion,
        telefono: telefono,
      })
    );
  }
}
