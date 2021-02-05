import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as PersonaActions from '../store/personas.actions';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';
import {  FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {ListPersonsComponent } from '../list-persons/list-persons.component';
import * as bootstrap from 'bootstrap';
import { IPersona } from '../tasks/persona.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  form: FormGroup;
  
  constructor(private store: Store<AppState>, private personService: PersonService, private router: Router) {}

  ngOnInit(): void {}

  addPerson(
    nombre: string,
    apellidoP: string,
    apellidoM: string,
    direccion: string,
    telefono: number
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

  onNewPersona(form: { value: IPersona; }){
      this.personService.createPersona(form.value).subscribe()
    location.reload();
  }

}
