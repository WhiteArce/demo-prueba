import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IPersona } from '../tasks/persona.model';
import { AppState } from '../app.state';
import { PersonService } from '../services/person.service';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss'],
})
export class ListPersonsComponent implements OnInit {
  personas: Observable<IPersona[]> = this.store.select('personas');

  listaPersonas = [];

  subcripcionListaPersonas: Subscription;
  modalContent: undefined;

  form: FormGroup;
  personaSeleccionada = [];

  constructor(
    private store: Store<AppState>,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  async getPersonas() {
    this.personService.getPersonas().subscribe(
      (res) => {
        console.log(res);
        this.listaPersonas = res;
      },
      (err) => console.log(err)
    );
  }
  getPersonasClick() {
    this.subcripcionListaPersonas = this.personService
      .getPersonas()
      .subscribe(() => {
        this.getPersonas();
      });
  }

  editPerson(persona) {
    this.personaSeleccionada.push(persona);
    if (this.personaSeleccionada.length > 1) {
      this.personaSeleccionada.splice(0, this.personaSeleccionada.length);
    }

    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false,
    });
    myModal.show();
  }
  modalRefresh() {
    location.reload();
  }
  updatePersona(item, form: { value: IPersona }) {
    let id = item.id;
    this.personService.updatePersona(id, form.value).subscribe();
   this.modalRefresh();
  }
  deletePerson(persona) {
    let id = persona.id;
    this.personService.deletePersona(id).subscribe();
    location.reload();
  }
  deleteModal(persona) {
    Swal.fire({
      title: `¿Quieres eliminar a ${persona.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar',
      cancelButtonColor: '#d33',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Borrado!', 'La persona ha sido eliminada', 'success');
        this.deletePerson(persona);
      }
    });
  }
}
