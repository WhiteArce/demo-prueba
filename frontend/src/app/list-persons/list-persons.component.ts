import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Persona } from '../tasks/persona.model';
import { AppState } from '../app.state'; 

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})
export class ListPersonsComponent implements OnInit {

  personas: Observable<Persona[]>;

  constructor(private store: Store<AppState>) { 
    this.personas = this.store.select('personas');
  }

  ngOnInit(): void {
  }

}
